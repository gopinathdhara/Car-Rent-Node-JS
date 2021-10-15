'use strict';

const asyncHandler = require('express-async-handler');
const reviewsModel = require('../models/ReviewsModel');
const utils = require('../../common/utils');
const reviewsUtils = require('../utils/ReviewsUtils');

//###########review insert#########
const insert = asyncHandler(async (req) => {
    var lang = req.headers.lang ? req.headers.lang : 'en';
    var statusObj = reviewsUtils.validateReviewsInsertBody(req.body);
    //###########for validation##############
    if (!statusObj.status) {
        throw Error("forui:" + statusObj.msg[lang]);
    }
    //##################################
    //######check restaurant id exist#######
    try {
        var checkRestaurantExist = await reviewsModel.checkRestaurantExist(req.body.restaurant_id);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to check restaurant exists" : "حدث خطأ للتحقق من وجود المطعم"));
    }
    if(checkRestaurantExist==false){
         throw Error("forui:" + (lang == 'en' ? "Restaurant does not exist" : "المطعم غير موجود"));
    }
    //######################
    //######check service id exist#########
     try {
        var checkServiceExist = await reviewsModel.checkServiceExist(req.body.restaurant_id,req.body.service_id);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to check service exists" : "حدث خطأ للتحقق من وجود الخدمة"));
    }
    if(checkServiceExist==false){
         throw Error("forui:" + (lang == 'en' ? "Service for this restaurant does not exist" : "خدمة هذا المطعم غير موجودة"));
    }
    //##########################
    //#######check order no exist#######
     try {
        var userId= req.loggedInUser.toJSON().id;
        var checkOrderExist = await reviewsModel.checkOrderExist(req.body.order_no,userId);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to check order exists" : "حدث خطأ للتحقق من وجود الطلب"));
    }
    if(checkOrderExist==false){
         throw Error("forui:" + (lang == 'en' ? "Order for this user does not exist" : "طلب هذا المستخدم غير موجود"));
    }
    //######################

    var insertData = {
        user_id: req.loggedInUser.toJSON().id,
        restaurant_id: req.body.restaurant_id ? req.body.restaurant_id : 0,
        rating: req.body.rating ? req.body.rating : 0,
        review_text: req.body.review_text ? req.body.review_text : '',
        order_no : req.body.order_no ? req.body.order_no : '',
        service_id : req.body.service_id ? req.body.service_id : 0,
        created_updated_by: req.loggedInUser.toJSON().id,
    };
    //#######insert reveiw#######
    try {
        var reviewId = await reviewsModel.reviewsInsert(insertData, req);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to insert review information" : "حدث خطأ في إدراج معلومات المراجعة"));
    }
    //####################
    // ########find and update average rating#############
    findUpdateAvgRating(req.body.restaurant_id);
    //##################
    //#######get inserted review details##########
     try {
        var reviewInfo = await reviewsModel.getSingleReview(reviewId);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to get review information" : "حدث خطأ في الحصول على معلومات المراجعة"));
    }
    //############################
    let data = { reviewInsertedDetails: reviewInfo };
    return data;
});

//###########review update#########
const update = async (req) => {
    let lang = req.headers.lang ? req.headers.lang : 'en';
    let statusObj = reviewsUtils.validateReviewsUpdateBody(req.body);
    //###########for validation##############
    if (!statusObj.status) {
        throw Error("forui:" + statusObj.msg[lang]);
    }
    //####################
    //######check review id exist#######
    try {
        var checkReviewExist = await reviewsModel.checkReviewExist(req.body.review_id);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to check review exists" : "حدث خطأ للتحقق من وجود العرض"));
    }
    if(checkReviewExist==false){
         throw Error("forui:" + (lang == 'en' ? "Review does not exist" : "المراجعة غير موجودة"));
    }
    //######################
    //#########update review##########
    try{
        var updateStatus=await reviewsModel.reviewsUpdate(req);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to update review information" : "حدث خطأ لتحديث معلومات المراجعة"));
    }
    //###################
    //#######get review details##########
     try {
        var reviewInfo = await reviewsModel.getSingleReview(req.body.review_id);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to get review information" : "حدث خطأ في الحصول على معلومات المراجعة"));
    }
    //############################
    // ########find and update average rating#############
    findUpdateAvgRating(reviewInfo[0].restaurant_id);
    // ########find and update average rating#############
    var obj = { "updateStatus":updateStatus };
    return obj;
}
//##################################

//########### reviews list for all#########
const getReviews = asyncHandler(async (req) => {
    let lang = req.headers.lang ? req.headers.lang : 'en';
    var statusObj = reviewsUtils.validateReviewsListBody(req.query);
    //###########for validation##############
    if (!statusObj.status) {
        throw Error("forui:" + statusObj.msg[lang]);
    }
    //##################################
    //######check restaurant id exist#######
    try {
        var checkRestaurantExist = await reviewsModel.checkRestaurantExist(req.query.restaurant_id);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to check restaurant exists" : "حدث خطأ للتحقق من وجود المطعم"));
    }
    if(checkRestaurantExist==false){
         throw Error("forui:" + (lang == 'en' ? "Restaurant does not exist" : "المطعم غير موجود"));
    }
    //######################
    try {
        var data = await reviewsModel.getReviews(req);
        let formattedData = data.review_details ? data.review_details.map(reviewsUtils.formatServiceDataForUI) : [];
        return formattedData;
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to fetch reviews" : "حدث خطأ في جلب المراجعات"));
    }
});
//#####################
//###############delete reviews#############
const deleteReviews = asyncHandler(async (req) => {
    let lang = req.headers.lang ? req.headers.lang : 'en';
    let statusObj = reviewsUtils.validateReviewsDeleteBody(req.body);
    //for validation
    if (!statusObj.status) {
        throw Error("forui:" + statusObj.msg[lang]);
    }
    //######check review id exist#######
    try {
        var checkReviewExist = await reviewsModel.checkReviewExist(req.body.review_id);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to check review exists" : "حدث خطأ للتحقق من وجود العرض"));
    }
    if(checkReviewExist==false){
         throw Error("forui:" + (lang == 'en' ? "Review does not exist" : "المراجعة غير موجودة"));
    }
    //######################
    //#######get review details##########
     try {
        var reviewInfo = await reviewsModel.getSingleReview(req.body.review_id);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to get review information" : "حدث خطأ في الحصول على معلومات المراجعة"));
    }
    //############################ 
    //#########delete review########
    let deleteStatus;
    try {
        deleteStatus = await reviewsModel.deleteReviews(req);
         
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to delete review" : "حدث خطأ في حذف المراجعة"));
    }
    if(deleteStatus==0){
            throw Error("forui:" + (lang == 'en' ? "Unable to delete reviews becuase it does not exist" : "تعذر حذف المراجعات لأنها غير موجودة"));
        }
    //#################    
    // ########find and update average rating#############
    findUpdateAvgRating(reviewInfo[0].restaurant_id);
    // ########find and update average rating#############    
    var obj = { "deleteStatus": deleteStatus };
    return obj;
});

//###################
//#########find and update avg rating of restaurant########
const findUpdateAvgRating = asyncHandler(async (restaurant_id) => {    
    try {
        await reviewsModel.getUpdateAvgRating(restaurant_id);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to find and update average rating" : "حدث خطأ في البحث عن متوسط التقييم وتحديثه"));
    }
});
//###############

module.exports = {
    insert,
    update,
    getReviews,
    deleteReviews,
    findUpdateAvgRating
}