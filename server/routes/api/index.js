var express = require('express');
var router = express.Router();

const { authenticateToken } = require('#middlewares/authenticateToken');
//import { authenticateToken } from '#middlewares/authenticateToken';

const authController = require('../../controllers/api/v1/authController');
const userController = require('../../controllers/api/v1/userController');

/* auth */
router.post('/profile', authController.profile);
router.post('/tokens', authController.localAuth);

/* user */
router.get('/users/:userId', [authenticateToken], userController.get);
router.post('/users', userController.create);
router.post('/refreshToken', userController.getRefreshedToken);

module.exports = router;
