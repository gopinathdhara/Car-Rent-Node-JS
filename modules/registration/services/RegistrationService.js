'use strict';

const asyncHandler = require('express-async-handler');
const registrationModel = require('../models/RegistrationModel');
const utils = require('../../common/utils');
const registrationUtils = require('../utils/RegistrationUtils');
let bcrypt = require("bcryptjs");

//###########user insert#########
const insertUser = asyncHandler(async (req) => {

    var statusObj = registrationUtils.validateRegisterInsertBody(req.body);
    //###########for validation##############
    if (!statusObj.status) {
        throw Error(statusObj.msg);
    }
    //##################################
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    var insertData = {
        name_on_driving_license: req.body.name_on_driving_license ? req.body.name_on_driving_license : '',
        name: req.body.name ? req.body.name : '',
        email: req.body.email ? req.body.email : '',
        phone: req.body.phone ? req.body.phone : '',
        address: req.body.address ? req.body.address : '',
        password: req.body.password ? hashPassword : '',
        //created_updated_by: req.loggedInUser.toJSON().id,
    };

    try {
        var userId = await registrationModel.insertUser(insertData);
    } catch (error) {
        console.log(error);
        throw Error("Error occurred to insert user information");
    }
    //####################

    let data = { userId: userId };
    return data;
});


module.exports = {
    insertUser
}