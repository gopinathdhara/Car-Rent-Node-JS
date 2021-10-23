'use strict';

const asyncHandler = require('express-async-handler');
const usersModel = require('../models/UsersModel');
const utils = require('../../common/utils');
const usersUtils = require('../utils/UsersUtils');
let bcrypt = require("bcryptjs");

//########### users list for all#########
const listuser = asyncHandler(async (req) => {
    try {
        var data = await usersModel.listuser();
        //let formattedData = data.review_details ? data.review_details.map(reviewsUtils.formatServiceDataForUI) : [];
        return data;
    } catch (error) {
        console.log(error);
        throw Error("Error occurred to fetch users");
    }
});
//#####################

//########### my profile#########
const myprofile = asyncHandler(async (req) => {
    var cond = {}
    if (req.usertoken.userId != undefined) {
        cond.id = req.usertoken.userId;
        try {
            //for profile
            var data = await usersModel.userProfile(cond);
            //let formattedData = data.review_details ? data.review_details.map(reviewsUtils.formatServiceDataForUI) : [];
            return data;
        } catch (error) {
            console.log(error);
            throw Error("Error occurred to fetch users");
        }
    }

});
//#####################

//########### update profile#########
const updateprofile = asyncHandler(async (req) => {
    var cond = {}
    if (req.usertoken.userId != undefined) {
        cond.id = req.usertoken.userId;

        var data = {
            name: req.body.name,
            gender: req.body.gender,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            name_on_driving_license: req.body.name_on_driving_license,

        }
        if (req.body.password != "") {
            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hashPassword = bcrypt.hashSync(req.body.password, salt);
            data.password = hashPassword
        }
        try {
            //for profile
            var data = await usersModel.updateprofile(data, cond);
            return data;
        } catch (error) {
            console.log(error);
            throw Error("Error occurred to update profile");
        }
    }

});
//#####################


module.exports = {
    listuser,
    myprofile,
    updateprofile
}