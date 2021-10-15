'use strict';

const router = require('express').Router();
const middleware = require('../common/middlewares');
const loginController = require('./controllers/LoginController');

//###########login #########
router.post('/login',
  loginController.loginUser
);
//#######################


module.exports = router;