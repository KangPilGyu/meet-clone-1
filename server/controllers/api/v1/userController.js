const dotenv = require('dotenv').config().parsed;
const passport = require('passport');
const crypto = require('crypto');
const { Op } = require('sequelize');
const salt = require('../../../config/salt');
const { user } = require('../../../models');
const jwt = require('jsonwebtoken');

module.exports = {
  create: async (req, res, next) => {
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
      1;
    }
  },

  get: async (req, res, next) => {
    res.send('you are authenticated');
  },

  getRefreshedToken: async (req, res, next) => {
    res.send('refresh');
  },
};
