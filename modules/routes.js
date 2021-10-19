'use strict';

const router = require('express').Router();
const { errors } = require('celebrate');
//reviews routes
const reviewsRoutes = require('./reviews/ReviewsRoutes');
const registrationRoutes = require('./registration/RegistrationRoutes');
const loginRoutes = require('./login/LoginRoutes');
const carRoutes = require('./car/CarRoutes');
const usersRoutes = require('./users/UsersRoutes');

router.get('/', (req, res) => {
    return res.status(200).send({
        statusCode: 200,
        message: 'Api working fine',
        data: {}
    });
});
router.post('/test', (req, res, next) => {
    console.log(req);
    res.send('success');
})

router.use(reviewsRoutes);
router.use(registrationRoutes);
router.use(loginRoutes);
router.use(carRoutes);
router.use(usersRoutes);
router.use(errors());

module.exports = router;