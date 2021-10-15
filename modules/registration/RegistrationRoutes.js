'use strict';

const router = require('express').Router();
const middleware = require('../common/middlewares');
const registrationController = require('./controllers/RegistrationController');

//###########registration #########
router.post('/registration',
  registrationController.insertUser
);
//#######################


module.exports = router;