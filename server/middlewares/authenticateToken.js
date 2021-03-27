const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const dotenv = require('dotenv').config().parsed;

export const authenticateToken = (req, res, next) => {
  // const authHeader = req.headers['authorization'];
  // const token = authHeader && authHeader.split(' ')[1];

  // if (token == null) {
  //   return res.sendStatus(401);
  // }
  // jwt.verify(token, jwtSecret, (err, user) => {
  //   if (err) {
  //     return res.sendStatus(403);
  //   }
  //   req.user = user;
  //   next();
  // });

  // try {
  //   if (req.headers.authorization) {
  //     const token = req.headers.authorization.split('Bearer ')[1];
  //   }
  //   req.decoded = jwt.verify(req.headers.authorization, dotenv.JWT_SECRET);
  //   return next();
  // } catch (err) {
  //   if (err.name === 'TokenExpiredError') {
  //     return res.status(419).json({ code: 419, message: '토큰이 만료되었습니다.' });
  //   }
  // }
  // return res.status(401).json({ code: 401, message: '유효하지 않은 토큰입니다.' });

  const token = req.headers.authorization.split(' ')[1];
  console.log('token:', token);
  if (!token) {
    res.send('we need a token!!');
  } else {
    jwt.verify(token, dotenv.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        res.json({ auth: false, message: 'you failed to authenticate' });
      } else {
        console.log(req.body.email);
        req.body.email = decoded.email;
        next();
      }
    });
  }
};
