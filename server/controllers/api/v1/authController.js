const passport = require('passport');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config().parsed;

module.exports = {
  googleAuth: function (req, res, next) {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
  },
  goolgeCallBack: function (req, res, next) {
    passport.authenticate('google', function (err, user) {
      if (err) {
        res.status(500).json({ message: 'error' });
      }
      if (!user) {
        res.status(500).json({ message: 'invalid credentials' });
      }
      const token = jwt.sign(JSON.stringify(user[0]), dotenv.JWT_SECRET);
      return res.render('auth', {
        message: 'success',
        user: JSON.stringify(user[0]),
        token: token,
      });
    })(req, res, next);
  },
  kakaoAuth: function (req, res, next) {
    passport.authenticate('kakao')(req, res, next);
  },
  kakaoAuthCallBack: function (req, res, next) {
    passport.authenticate('kakao', function (err, user) {
      if (err) {
        res.status(500).json({ message: 'error' });
      }
      if (!user) {
        res.status(500).json({ message: 'invalid credentials' });
      }
      const token = jwt.sign(JSON.stringify(user[0]), dotenv.JWT_SECRET);
      return res.render('auth', {
        message: 'success',
        user: JSON.stringify(user[0]),
        token: token,
      });
    })(req, res, next);
  },
  naverAuth: function (req, res, next) {
    passport.authenticate('naver')(req, res, next);
  },
  naverAuthCallBack: function (req, res, next) {
    passport.authenticate('naver', function (err, user) {
      if (err) {
        res.status(500).json({ message: 'error' });
      }
      if (!user) {
        res.status(500).json({ message: 'invalid credentials' });
      }
      const token = jwt.sign(JSON.stringify(user[0]), dotenv.JWT_SECRET);
      return res.render('auth', {
        message: 'success',
        user: JSON.stringify(user[0]),
        token: token,
      });
    })(req, res, next);
  },
  githubAuth: function (req, res, next) {
    passport.authenticate('github')(req, res, next);
  },
  githubAuthCallBack: function (req, res, next) {
    passport.authenticate('github', function (err, user) {
      if (err) {
        res.status(500).json({ message: 'error' });
      }
      if (!user) {
        res.status(500).json({ message: 'invalid credentials' });
      }
      return res.status(200).json({ message: 'success', user: user });
    })(req, res, next);
  },
  localAuth: function (req, res) {
    passport.authenticate('local', { session: false }, (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user,
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }
        const token = jwt.sign(JSON.stringify(user), dotenv.JWT_SECRET);
        return res.json({ user, token });
      });
    })(req, res);
  },
};
