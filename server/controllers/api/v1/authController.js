const passport = require('passport');

module.exports = {
    googleAuth: function(req, res, next) {
        passport.authenticate('google', {scope: ['profile', 'email']})(req, res, next);
    },
    goolgeCallBack: function (req, res, next) {
        passport.authenticate('google', function (err, user) {
            if (err) { res.status(500).json({ message: 'error' }); }
            if (!user) { res.status(500).json({ message: 'invalid credentials' }); }
            return res.status(200).json({ message: 'success', user: user });
        })(req, res, next);
    },
    kakaoAuth: function(req, res, next) {
        passport.authenticate('kakao')(req, res, next);
    },
    kakaoAuthCallBack: function (req, res, next) {
        passport.authenticate('kakao', function (err, user) {
            if (err) { res.status(500).json({ message: 'error' }); }
            if (!user) { res.status(500).json({ message: 'invalid credentials' }); }
            return res.status(200).json({ message: 'success', user: user });
        })(req, res, next);
    },
    naverAuth: function(req, res, next) {
        passport.authenticate('naver')(req, res, next);
    },
    naverAuthCallBack: function (req, res, next) {
        passport.authenticate('naver', function (err, user) {
            if (err) { res.status(500).json({ message: 'error' }); }
            if (!user) { res.status(500).json({ message: 'invalid credentials' }); }
            return res.status(200).json({ message: 'success', user: user });
        })(req, res, next);
    },
}