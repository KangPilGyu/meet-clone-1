var express = require('express');
var router = express.Router();
const passport = require('passport');

const authController = require('../controllers/api/v1/authController');
// ---- auth ----

router.get('/auth/local', authController.localAuth);

router.get('/auth/google', authController.googleAuth);
router.get('/auth/google/callback', authController.goolgeCallBack);

router.get('/auth/kakao', authController.kakaoAuth);
router.get('/auth/kakao/callback', authController.kakaoAuthCallBack);

router.get('/auth/naver', authController.naverAuth);
router.get('/auth/naver/callback', authController.naverAuthCallBack);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
