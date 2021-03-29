const dotenv = require('dotenv').config().parsed;
const passport = require('passport');
const { user } = require('../../../models');
const crypto = require('crypto');
const { Op } = require('sequelize');
const salt = require('../../../config/salt');
const jwt = require('jsonwebtoken');

module.exports = {
  signUpController: async (req, res, next) => {
    console.log('hello sign up');
    const { name, email, password } = req.body;
    if (Object.keys(req.body).length !== 3) {
      res.status(422).send('insufficient parameters supplied');
    }
    try {
      let [newUser, created] = await user.findOrCreate({
        where: { email },
        defaults: { password, name },
      });
      // key 값이 있고 그에 해당하는 value값이 없을때!
      if (created) {
        // json으로 넘겨줄 때 중요 정보인 비밀번호는 제외하고 넘기는 로직
        const result = newUser.dataValues;
        const token = jwt.sign({ id: result.email }, dotenv.JWT_SECRET, {
          expiresIn: 600,
        });
        result.token = token;
        const { password, ...data } = result;
        res.status(201).json(data);
      } else {
        res.status(409).send({ message: 'email exists' });
      }
    } catch (err) {
      console.log(err);
      // err를 app.js 로 에러헨들러로 넘겨준다.
      next(err);
    }
  },
  signInController: async (req, res, next) => {
    console.log('hello signIn');
    console.log(req.body);
    try {
      let { email, password } = req.body;
      var shasum = crypto.createHmac('sha512', salt.encryption);
      shasum.update(password);
      password = shasum.digest('hex');
      let result = await user.findOne({ where: { [Op.and]: [{ email }, { password }] } });
      if (result === null) {
        console.log('sign-in fails');
        res.status(404).send({ auth: false, message: 'invalid user or invalid credentials' });
      } else {
        console.log('sign-in success');
        const token = jwt.sign({ id: result.dataValues.email }, dotenv.JWT_SECRET, {
          expiresIn: 600,
        });
        console.log(token);
        const { password, ...data } = result.dataValues;
        res.status(200).json({ auth: true, token: token, user: data });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  },
  signOutController: async (req, res, next) => {
    res.send({ message: 'success' });
  },
  userInfoController: async (req, res, next) => {
    console.log('get userInfo');
    res.send('you are authenticated');
  },

  getRefreshedToken: async (req, res, next) => {
    res.send('refresh');
  },
};
