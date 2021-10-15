'use strict';

const reviewsService = require('../services/ReviewsService');

//###########Reviews insert#########
const insertReviews = async (req, res, next) => {
    try {
        const data = await reviewsService.insert(req);
        return res.status(200).send({
            statusCode: 200,
            message: req.headers.lang == 'en' ? 'Reviews inserted successfully !!!' : 'تم إدراج المراجعات بنجاح !!!',
            data: data
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: (err.message.split(':')[0] === 'forui') ? err.message.split(':')[1] : req.headers.lang == 'en' ? 'Sorry, we are having some issues, failed to insert reviews !!!' : 'عذرا ، لدينا بعض المشاكل ، فشل في إدراج المراجعات !!!',
            error: ((err) => {
                const dotenvcurrent = require('dotenv');
                dotenvcurrent.config();
                return process.env.NODE_ENV == 'DEVELOPMENT' ? err.message : true;
            })(err),
            data: {}
        });
    }
};
//####################### 
//###########Reviews update#########
const updateReviews = async (req, res, next) => {
    try {
        const data = await reviewsService.update(req);
        return res.status(200).send({
            statusCode: 200,
            message: req.headers.lang == 'en' ? 'Reviews updated successfully !!!' : 'تم تحديث المراجعات بنجاح',
            data: data
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: (err.message.split(':')[0] === 'forui') ? err.message.split(':')[1] : req.headers.lang == 'en' ? 'Sorry, we are having some issues, failed to update reviews!!!' : 'آسف ، لدينا بعض المشاكل ، فشل تحديث المراجعات !!!',
            error: ((err) => {
                const dotenvcurrent = require('dotenv');
                dotenvcurrent.config();
                return process.env.NODE_ENV == 'DEVELOPMENT' ? err.message : true;
            })(err),
            data: {}
        });
    }
};
//####################### 
//###########reviews list for all#########
const getReviews = async (req, res, next) => {
    try {
        const data = await reviewsService.getReviews(req);
        return res.status(200).send({
            statusCode: 200,
            message: req.headers.lang == 'en' ? 'Reviews fetched successfully !!!' : 'تم جلب الطلب بنجاح !!!',
            data: data

        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: (err.message.split(':')[0] === 'forui') ? err.message.split(':')[1] : req.headers.lang == 'en' ? 'Sorry, we are having some issues, Unable to fetch reviews !!!' : 'عذرًا ، لدينا بعض المشكلات ، يتعذر جلب المراجعات !!!',
            error: ((err) => {
                const dotenvcurrent = require('dotenv');
                dotenvcurrent.config();
                return process.env.NODE_ENV == 'DEVELOPMENT' ? err.message : true;
            })(err),
            data: {}
        });
    }
};
//#####################
//###########delete reviews################
const deleteReviews = async (req, res, next) => {
    try {
        const data = await reviewsService.deleteReviews(req);
        return res.status(200).send({
            statusCode: 200,
            //message: 'Success',
            message: req.headers.lang == 'en' ? 'Review deleted successfully !!!' : 'تم حذف المراجعة بنجاح !!!',
            data: data
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: (err.message.split(':')[0] === 'forui') ? err.message.split(':')[1] : req.headers.lang == 'en' ? 'Sorry, we are having some issues, failed to delete review!!!' : 'عذرا ، لدينا بعض المشاكل ، فشل حذف المراجعة !!!',
            error: ((err) => {
                const dotenvcurrent = require('dotenv');
                dotenvcurrent.config();
                return process.env.NODE_ENV == 'DEVELOPMENT' ? err.message : true;
            })(err),
            data: {}
        });
    }
};
//##################

module.exports = {
    insertReviews,
    updateReviews,
    deleteReviews,
    getReviews
}