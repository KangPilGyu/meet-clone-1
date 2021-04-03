var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require('../controllers/api/v1/userController');
const { authenticateToken } = require('../middlewares/authenticateToken');
/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});

router.post(
  '/signin',
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/signin',
    failureFlash: true,
    successFlash: true,
  }),
);

router.post('/signUp', userController.signUpController);
// router.post('/signIn', userController.signInController);
router.post('/signOut', userController.signOutController);
router.get('/user', [authenticateToken], userController.userInfoController);
router.post('/refreshToken', userController.getRefreshedToken);
module.exports = router;
