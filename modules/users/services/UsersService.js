'use strict';

const asyncHandler = require('express-async-handler');
const usersModel = require('../models/UsersModel');
const utils = require('../../common/utils');
const usersUtils = require('../utils/UsersUtils');

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


module.exports = {
    listuser
}