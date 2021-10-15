'use strict';

const asyncHandler = require('express-async-handler');
const loginModel = require('../models/LoginModel');
const utils = require('../../common/utils');
const loginUtils = require('../utils/LoginUtils');
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

//###########user login#########
const loginUser = asyncHandler(async (req) => {

    // var statusObj = registrationUtils.validateRegisterInsertBody(req.body);
    // //###########for validation##############
    // if (!statusObj.status) {
    //     throw Error(statusObj.msg);
    // }
    // //##################################
    // const saltRounds = 10;
    // const salt = bcrypt.genSaltSync(saltRounds);
    // const hashPassword = bcrypt.hashSync(req.body.password, salt);

    var loginData = {

        email: req.body.email ? req.body.email : ''
        //created_updated_by: req.loggedInUser.toJSON().id,
    };

    try {
        var user = await loginModel.loginUser(loginData);
    } catch (error) {
        console.log(error);
        throw Error("Error occurred to get user information for login");
    }
    if (user == false) {
        throw Error("User does not exist");
    } else {
        const status = await bcrypt.compare(req.body.password, user[0].password);
        if (status == true) {
            const token = jwt.sign({
                email: user[0].email,
                userId: user[0].id,
                userType: user[0].user_type,
            }, 'secret', { expiresIn: 60 * 60 * 5 });
            let loginDetails = { status: 1, "token": token, "user": user };
            return loginDetails;
        } else {
            // res.status(400).json({ "status": 400, 'message': 'Invalid email or password' });
            throw Error("Invalid email or password");
        }
    }
    //####################
});


module.exports = {
    loginUser
}