'use strict';

const asyncHandler = require('express-async-handler');
const carModel = require('../models/CarModel');
const utils = require('../../common/utils');
const carUtils = require('../utils/CarUtils');
const fs = require('fs');

//###########car insert#########

const addcar = asyncHandler(async (req) => {
    // var lang = req.headers.lang ? req.headers.lang : 'en';
    // var statusObj = reviewsUtils.validateReviewsInsertBody(req.body);
    // //###########for validation##############
    // if (!statusObj.status) {
    //     throw Error("forui:" + statusObj.msg[lang]);
    // }
    // //##################################
    let images = req.body.car_image;
    let folderPath = "./public/cars/";
    var allFiles = [];
    var allFilesExt = [];
    let finalFiles = [];
    const promises = [];
    let fileName = utils.getRandomInt(1, 1000) + Date.now();
    allFiles.push(fileName);
    promises.push(menusFilesWriteAsync(images, 1, folderPath, fileName));

    try {
        let x = await Promise.all(promises);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to write file" : "حدث خطأ في كتابة الملف"));
    }
    //get file extension

    let fileExtension;
    try {
        fileExtension = utils.fileExtensionGetBase64Input(images);
        allFilesExt.push(fileExtension);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to get file extension" : "حدث خطأ في الحصول على امتداد الملف"));

    }
    for (let i = 0; i < allFiles.length; i++) {
        if (fs.existsSync(folderPath + 1 + '/' + allFiles[i] + '.' + allFilesExt[i])) {
            finalFiles.push(allFiles[i] + '.' + allFilesExt[i]);
        }
    }

    var insertData = {

        car_name: req.body.car_name ? req.body.car_name : '',
        car_no: req.body.car_no ? req.body.car_no : '',
        no_of_seats: req.body.no_of_seats ? req.body.no_of_seats : 0,
        is_ac: req.body.is_ac ? req.body.is_ac : 0,
        mileage: req.body.mileage ? req.body.mileage : '',
        is_manual: req.body.is_manual ? req.body.is_manual : 0,
        other_details: req.body.other_details ? req.body.other_details : '',
        important_details: req.body.important_details ? req.body.important_details : '',
        no_of_large_bags: req.body.no_of_large_bags ? req.body.no_of_large_bags : 0,
        no_of_small_bags: req.body.no_of_small_bags ? req.body.no_of_small_bags : 0,
        price_per_hour: req.body.price_per_hour ? req.body.price_per_hour : 0,
        fuel_type: req.body.fuel_type ? req.body.fuel_type : '',
        fuel_tank_capacity: req.body.fuel_tank_capacity ? req.body.fuel_tank_capacity : '',
        car_image: finalFiles[0],
        city_name: req.body.city_name ? req.body.city_name : '',
        brand_name: req.body.brand_name ? req.body.brand_name : '',
        created_by: req.usertoken.userId

    };
    //#######insert car#######
    try {
        var carId = await carModel.addcar(insertData);
    } catch (error) {
        console.log(error);
        throw Error("Error occurred to insert car information");
    }
    //####################

    let data = { carId: carId };
    return data;
});

//########### cars list for all#########
const listcar = asyncHandler(async (req) => {

    // console.log(req.body);
    var searchData = "";
    if (req.body.search_data != "") {
        searchData = req.body.search_data;
    }
    var cond = {}
    if (req.query.carId != undefined) {
        cond.id = req.query.carId;
    }
    var page = ''
    if (req.query.page != undefined) {
        if (req.query.page == "home") {
            page = 'home'
        }
    }
    try {
        var data = await carModel.listcar(cond, page, searchData);
        //let formattedData = data.review_details ? data.review_details.map(reviewsUtils.formatServiceDataForUI) : [];
        return data;
    } catch (error) {
        console.log(error);
        throw Error("Error occurred to fetch cars");
    }
});
//#####################

//update car
const updatecar = asyncHandler(async (req) => {
    // var lang = req.headers.lang ? req.headers.lang : 'en';
    // var statusObj = reviewsUtils.validateReviewsInsertBody(req.body);
    // //###########for validation##############
    // if (!statusObj.status) {
    //     throw Error("forui:" + statusObj.msg[lang]);
    // }
    // //##################################

    console.log(req.body.car_image)
    if (req.body.car_image != undefined) {
        var images = req.body.car_image;
        var folderPath = "./public/cars/";
        var allFiles = [];
        var allFilesExt = [];
        var finalFiles = [];
        const promises = [];
        let fileName = utils.getRandomInt(1, 1000) + Date.now();
        allFiles.push(fileName);
        promises.push(menusFilesWriteAsync(images, 1, folderPath, fileName));

        try {
            let x = await Promise.all(promises);
        } catch (error) {
            console.log(error);
            throw Error("forui:" + (lang == 'en' ? "Error occurred to write file" : "حدث خطأ في كتابة الملف"));
        }
        //get file extension

        let fileExtension;
        try {
            fileExtension = utils.fileExtensionGetBase64Input(images);
            allFilesExt.push(fileExtension);
        } catch (error) {
            console.log(error);
            throw Error("forui:" + (lang == 'en' ? "Error occurred to get file extension" : "حدث خطأ في الحصول على امتداد الملف"));

        }
        for (let i = 0; i < allFiles.length; i++) {
            if (fs.existsSync(folderPath + 1 + '/' + allFiles[i] + '.' + allFilesExt[i])) {
                finalFiles.push(allFiles[i] + '.' + allFilesExt[i]);
            }
        }
    }


    var updateData = {

        car_name: req.body.car_name ? req.body.car_name : '',
        car_no: req.body.car_no ? req.body.car_no : '',
        no_of_seats: req.body.no_of_seats ? req.body.no_of_seats : 0,
        is_ac: req.body.is_ac ? req.body.is_ac : 0,
        mileage: req.body.mileage ? req.body.mileage : '',
        is_manual: req.body.is_manual ? req.body.is_manual : 0,
        other_details: req.body.other_details ? req.body.other_details : '',
        important_details: req.body.important_details ? req.body.important_details : '',
        no_of_large_bags: req.body.no_of_large_bags ? req.body.no_of_large_bags : 0,
        no_of_small_bags: req.body.no_of_small_bags ? req.body.no_of_small_bags : 0,
        price_per_hour: req.body.price_per_hour ? req.body.price_per_hour : 0,
        fuel_type: req.body.fuel_type ? req.body.fuel_type : '',
        fuel_tank_capacity: req.body.fuel_tank_capacity ? req.body.fuel_tank_capacity : '',
        // car_image: finalFiles[0],
        city_name: req.body.city_name ? req.body.city_name : '',
        brand_name: req.body.brand_name ? req.body.brand_name : '',
        updated_by: req.usertoken.userId

    };
    //if user upload car image then change car image
    if (req.body.car_image != undefined) {
        updateData.car_image = finalFiles[0]
    }
    var cond = {
        id: req.body.carIdPk
    }
    //#######update car#######
    try {
        var updateStatus = await carModel.updatecar(updateData, cond);
    } catch (error) {
        console.log(error);
        throw Error("Error occurred to update car information");
    }
    //####################

    let data = { updateStatus: updateStatus };
    return data;
});


//########### city list for all#########
const listcity = asyncHandler(async (req) => {
    var cond = {}
    try {
        var data = await carModel.listcity();
        return data;
    } catch (error) {
        console.log(error);
        throw Error("Error occurred to fetch cities");
    }
});
//#####################

//car book
const carbook = asyncHandler(async (req) => {

    // var lang = req.headers.lang ? req.headers.lang : 'en';
    // var statusObj = reviewsUtils.validateReviewsInsertBody(req.body);
    // //###########for validation##############
    // if (!statusObj.status) {
    //     throw Error("forui:" + statusObj.msg[lang]);
    // }
    // //##################################

    //console.log('user details')
    //console.log(req.usertoken)

    //get car details
    try {
        var carDetails = await carModel.getCarDetails({ id: req.body.car_id });
    } catch (error) {
        console.log(error);
        throw Error("Error occurred to get car information");
    }

    //get user details
    try {
        var userDetails = await carModel.getUserDetails({ id: req.usertoken.userId });
    } catch (error) {
        console.log(error);
        throw Error("Error occurred to get user information");
    }

    var insertData = {
        user_id: req.usertoken.userId,
        car_id: req.body.car_id ? req.body.car_id : 0,
        car_name: req.body.car_name ? req.body.car_name : '',
        car_no: req.body.car_no ? req.body.car_no : '',

        user_name: req.body.user_name ? req.body.user_name : '',
        user_email: req.body.user_email ? req.body.user_email : '',
        user_phone: req.body.user_phone ? req.body.user_phone : '',

        user_address: req.body.user_address ? req.body.user_address : '',
        car_city: req.body.car_city ? req.body.car_city : '',
        start_date: req.body.start_date ? req.body.start_date : '',
        end_date: req.body.end_date ? req.body.end_date : '',

        start_time: req.body.start_time ? req.body.start_time : '',
        end_time: req.body.end_time ? req.body.end_time : '',

        start_date_time: req.body.start_date + " " + req.body.start_time,
        end_date_time: req.body.end_date + " " + req.body.end_time,

        pickup_location: req.body.pickup_location ? req.body.pickup_location : '',
        dropoff_location: req.body.dropoff_location ? req.body.dropoff_location : '',

        car_details: JSON.stringify(carDetails),
        user_details: JSON.stringify(userDetails),

        car_price_per_hour: req.body.car_price_per_hour ? req.body.car_price_per_hour : 0,
        total_price: req.body.total_price ? req.body.total_price : 0,

        created_by: req.usertoken.userId,


    };
    //#######insert booking details#######

    var carId = await carModel.carbook(insertData);

    if (carId == 0) {
        throw Error("This car is already booked! Please choose other date time.");
    }


    //####################

    let data = { carId: carId };
    return data;
});

//#########file write start##########
const menusFilesWriteAsync = async (mainFile, restaurantId, folderPath, fileName1) => {

    await utils.fileWriteBase64Input(mainFile, restaurantId, folderPath, fileName1);
}
//#########file write end##########

//car book list
const carbooklist = asyncHandler(async (req) => {

    var cond = {}
    var userType = req.usertoken.userType;
    if (userType == 1) {
        cond.user_id = req.usertoken.userId;
    }
    try {
        var data = await carModel.carbooklist(cond);
        let formattedData = data.booking_details ? data.booking_details.map(carUtils.formatServiceDataForUI) : [];
        return formattedData;
    } catch (error) {
        console.log(error);
        throw Error("Error occurred to fetch cars");
    }
});
//#####################

//update Booking Status
const updateBookingStatus = asyncHandler(async (req) => {

    var data = {
        booking_status: req.body.booking_status
    }
    var cond = {
        id: req.body.carId
    }
    try {
        var status = await carModel.updateBookingStatus(data, cond);

    } catch (error) {
        console.log(error);
        throw Error("Error occurred to update booking status");
    }
    if (status == 2) {
        throw Error("You can not complete the booking now.");
    }
    if (status == 3) {
        throw Error("You can not cancel the booking now.");
    }
});

//delete car
const deletecar = asyncHandler(async (req) => {

    var data = {
        display_status: 0
    }
    var cond = {
        id: req.body.carId
    }
    try {
        return await carModel.deletecar(data, cond);

    } catch (error) {
        console.log(error);
        throw Error("Error occurred to update booking status");
    }
});


module.exports = {
    addcar,
    listcar,
    listcity,
    carbook,
    carbooklist,
    updatecar,
    updateBookingStatus,
    deletecar
}