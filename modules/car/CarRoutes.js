'use strict';

const router = require('express').Router();
const middleware = require('../common/middlewares');
const carController = require('./controllers/CarController');

//###########car insert#########
router.post('/addcar',
  middleware.verifyToken,
  carController.addcar
);
//#######################

//###########car list for all#########
router.get('/listcar',
  carController.listcar
);
//#####################

//###########car city list for all#########
router.get('/listcity',
  carController.listcity
);
//#####################

//###########car book#########
router.post('/carbook',
  middleware.verifyTokenUser,
  carController.carbook
);
//#######################


module.exports = router;