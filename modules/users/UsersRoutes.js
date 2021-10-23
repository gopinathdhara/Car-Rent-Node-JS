'use strict';

const router = require('express').Router();
const middleware = require('../common/middlewares');
const usersController = require('./controllers/UsersController');

//###########users list#########
router.get('/listuser',

  usersController.listuser
);
//#####################

//###########my profile#########
router.post('/myprofile',
  middleware.verifyTokenUserAdmin,
  usersController.myprofile
);
//#######################

//###########update profile#########
router.post('/updateprofile',
  middleware.verifyTokenUserAdmin,
  usersController.updateprofile
);
//#######################

module.exports = router;