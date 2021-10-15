'use strict';

const router = require('express').Router();
const middleware = require('../common/middlewares');
const reviewsController = require('./controllers/ReviewsController');

//###########reviews insert#########
router.post('/reviews',
  middleware.verifyToken,
  reviewsController.insertReviews
);
//#######################
//###########reviews update#########
router.put('/reviews',
  middleware.verifyToken,
  reviewsController.updateReviews
);
//#######################
//###########reviews delete#########
router.delete('/reviews',
  middleware.verifyToken,
  reviewsController.deleteReviews
);
//#######################
//###########reviews list for all#########
router.get('/reviews',
  reviewsController.getReviews
);
//#####################

module.exports = router;