'use strict';
const db = require('../../common/db');
/* sequelize orm */
const sequelize = require('../../common/dbSequelize');
let Sequelize = require("sequelize");
const Op = Sequelize.Op;
const utils = require('../../common/utils');
//import reviews schema
var reviews = require('../../dbschemas/reviews');
//import users schema
var users = require('../../dbschemas/users');

reviews.belongsTo(users, {
    foreignKey: 'user_id'
});
//##########################

//###########reviews insert#########
const reviewsInsert = async (insertData, req) => {
    return await db('reviews').insert(insertData);
}
//##################################

//###########reviews update#########
const reviewsUpdate = async (req) => {
    return await db('reviews')
        .where({
            id: req.body.review_id
        })
        .update(
            {
                rating: req.body.rating,
                review_text: req.body.review_text,
                created_updated_by: req.loggedInUser.toJSON().id,
                
            }
        );
}
//##################################
//#######get single review#######
const getSingleReview = async (id) => {
    return await db
        .select("*")
        .from("reviews")
        .where({
            id: id
        });
}
//#####################

//###########Reviews list for user #########
const getReviews = async (req) => {
    
    var withReviewTxt = '';
    var paramVar;
    if (req.query.withreviewtxt) 
    {
        withReviewTxt = req.query.withreviewtxt;
        if(req.query.withreviewtxt==1)
        {
                paramVar = {
                                [Op.and] : [
                                                    {
                                                        review_text: {
                                                            [Op.ne]: ''
                                                        }
                                                    },
                                                    {
                                                        review_text:{
                                                            [Op.ne]: null
                                                        }
                                                    }
                                
                                            ] 
                            
                            }
        }
        else if(req.query.withreviewtxt==0)
        {
             paramVar = {
                                [Op.or] :  [
                                                    {
                                                        review_text: {
                                                            [Op.eq]: ''
                                                        }
                                                    },
                                                    {
                                                        review_text:{
                                                            [Op.is]: null
                                                        }
                                                    }
                                
                                            ] 
                            
                            }
        }
        
    } else {
        paramVar = {
            id: {
                [Sequelize.Op.gte]: 0
            }
        }
    }
    var sortby = 'updated_at';
    var whereData = {
    }
    if (req.query.sortby) {
        sortby = req.query.sortby;
    }
    var sortdirection = 'desc';
    if (req.query.sortdirection) {
        sortdirection = req.query.sortdirection;
    }
    if (req.query.order_no!= undefined && req.query.order_no!="") {
        whereData.order_no = req.query.order_no;
    }
    if (req.query.service_id!= undefined && req.query.service_id!="") {
        whereData.service_id = req.query.service_id;
    }
    var whereObj = Sequelize.and(
        { restaurant_id: req.query.restaurant_id },
        paramVar,
        whereData
    );

    //###########################
    var countObj = await reviews.count({
        where: whereObj,
        distinct: true,
        order: [
            [sortby, sortdirection],
        ],
    });
    if (countObj > 0) {
        var obj = { "review_count": "", "review_details": "" };
        var reviewResult;
        reviewResult = await reviews.findAll({
            where: whereObj,
            include: [{
                 model: users
            }],
             order: [
                  [sortby, sortdirection],
            ],
        });
        obj.review_count = countObj;
        obj.review_details = reviewResult;
        return obj;
    } else {
        return new Promise(function (resolve, reject) {
            resolve([]);
        });
    }
}
//#################################
//##########delete review############
const deleteReviews = async (req) => {
    let reviewDetails = await getSingleReview(req.body.review_id);
    if (reviewDetails.length > 0) {
        return await db('reviews').where('id', req.body.review_id)
            .del();
    } else {
        return 0;
    }
}
//###################
//#####get and update average rating of restaurant
const getUpdateAvgRating = async (restaurant_id) => {
    var avgRatingResult= await db
        .avg('rating as avgrating')
        .from("reviews")
        .where({
            restaurant_id: restaurant_id
        });
    var avgrating=avgRatingResult[0].avgrating;
    console.log(avgrating); 
    return await db('restaurants')
        .where({
            id: restaurant_id
        })
        .update(
            {
                avg_rating: avgrating
            }
        );   
}
//##################
//######check review id exist#######
const checkReviewExist = async (reviewId) => {
    var count= await db
        .count('id as cnt')
        .from("reviews").where({ 'id': reviewId });
    var countRecord = count[0].cnt;    
    if(countRecord==0){
        return false;
    }else{
        return true;
    }
}
//#####################
//######check restaurant id exist#######
const checkRestaurantExist = async (restaurantId) => {
    var count= await db
        .count('id as cnt')
        .from("restaurants").where({ 'id': restaurantId });
    var countRecord = count[0].cnt;    
    if(countRecord==0){
        return false;
    }else{
        return true;
    }
}
//#####################
//##########check service id exist#######
const checkServiceExist = async (restaurantId,serviceId) => {
    var count= await db
        .count('id as cnt')
        .from("restaurants_services").where({ 'restaurant_id': restaurantId,'service_id': serviceId });
    var countRecord = count[0].cnt;    
    if(countRecord==0){
        return false;
    }else{
        return true;
    }
}
//##################
//###########check order no exist##########
const checkOrderExist = async (orderNo,userId) => {
    var count= await db
        .count('id as cnt')
        .from("orders").where({ 'order_no': orderNo,'user_id': userId });
    var countRecord = count[0].cnt;    
    if(countRecord==0){
        return false;
    }else{
        return true;
    }
}
//#################################
module.exports = {
    reviewsInsert,
    reviewsUpdate,
    getSingleReview,
    deleteReviews,
    getUpdateAvgRating,
    getReviews,
    checkReviewExist,
    checkRestaurantExist,
    checkServiceExist,
    checkOrderExist
}