'use strict';

const router = require('express').Router();
const middleware = require('../common/middlewares');
const usersController = require('./controllers/UsersController');

//###########users list#########
router.get('/listuser',
  usersController.listuser
);
//#####################

module.exports = router;