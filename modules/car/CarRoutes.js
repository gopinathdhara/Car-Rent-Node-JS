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

//###########car update#########
router.put('/updatecar',
  middleware.verifyToken,
  carController.updatecar
);
//#######################

//delete car
router.post('/deletecar',
  middleware.verifyToken,
  carController.deletecar
);
//#######################

//###########car list for all#########
router.post('/listcar',
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

//###########book list#########
router.post('/carbooklist',
  middleware.verifyTokenUserAdmin,
  carController.carbooklist
);
//#######################

//###########update Booking Status#########
router.post('/updateBookingStatus',
  middleware.verifyTokenUser,
  carController.updateBookingStatus
);
//#######################

module.exports = router;