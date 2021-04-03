var express = require('express');
var router = express.Router();
const passport = require('passport');
const authController = require('../controllers/api/v1/authController');
const { authenticateToken } = require('../middlewares/authenticateToken');

// ---- auth ----
router.get('/google', authController.googleAuth);
router.get('/google/callback', authController.goolgeCallBack);

router.get('/kakao', authController.kakaoAuth);
router.get('/kakao/callback', authController.kakaoAuthCallBack);

router.get('/naver', authController.naverAuth);
router.get('/naver/callback', authController.naverAuthCallBack);

router.get('/github', authController.githubAuth);
router.get('/github/callback', authController.githubAuthCallBack);

module.exports = router;
