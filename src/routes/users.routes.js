const { Router } = require('express');
const usersCtrl = require('../controllers/users.controller')
const router = Router();

router.get('/users/signup', usersCtrl.renderSignUpForm);
router.post('/users/signup', usersCtrl.signup);
router.get('/users/signin', usersCtrl.renderSignInForm);
router.post('/users/signin', usersCtrl.signin);
router.get('/users/logout', usersCtrl.logout);

module.exports = router;