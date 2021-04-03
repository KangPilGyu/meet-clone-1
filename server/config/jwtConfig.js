const salt = require('./salt');

module.exports = {
  jwt: {
    secret: salt.encryption,
    options: {
      audience: 'http://localhost:3100',
      expiresIn: '12h', // 1d
      issuer: 'localhost:3100',
    },
    cookie: {
      httpOnly: true,
      sameSite: true,
      signed: true,
      // secure: true,
    },
  },
};
