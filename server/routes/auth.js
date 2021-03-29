var express = require('express');
var router = express.Router();
const passport = require('passport');
const authController = require('../controllers/api/v1/authController');
const { authenticateToken } = require('../middlewares/authenticateToken');

// ---- auth ----
router.get('/google', [authenticateToken], authController.googleAuth);
router.get('/google/callback', authController.goolgeCallBack);

router.get('/kakao', [authenticateToken], authController.kakaoAuth);
router.get('/kakao/callback', authController.kakaoAuthCallBack);

router.get('/naver', [authenticateToken], authController.naverAuth);
router.get('/naver/callback', authController.naverAuthCallBack);

router.get('/github', [authenticateToken], authController.githubAuth);
router.get('/github/callback', authController.githubAuthCallBack);

module.exports = router;
