'use strict';
const db = require('../../common/db');
/* sequelize orm */
const sequelize = require('../../common/dbSequelize');
let Sequelize = require("sequelize");
const Op = Sequelize.Op;
const utils = require('../../common/utils');
//import cars schema
var cars = require('../../dbschemas/cars');
var booking_details = require('../../dbschemas/booking_details');

//###########car insert#########
const addcar = async (insertData) => {
    return await db('cars').insert(insertData);
}
//##################################

//update car
const updatecar = async (updateData, cond) => {
    return await db('cars')
        .where(cond)
        .update(
            updateData
        );
}
//update Booking Status
const updateBookingStatus = async (updateData, cond) => {
    return await db('booking_details')
        .where(cond)
        .update(
            updateData
        );
}

//###########car book#########
const carbook = async (insertData) => {
    var searchData = {}

    searchData.startdate = insertData.start_date;
    searchData.starttime = insertData.start_time;
    searchData.enddate = insertData.end_date;
    searchData.endtime = insertData.end_time;
    searchData.city = insertData.car_city;

    var insert_car_id = insertData.car_id;

    var carIds = [0]
    if (searchData != undefined) {
        //##########check car is already bookede################
        var carIdsArr = await checkCarBook(searchData);
        carIdsArr.map((elem, index) => {
            carIds.push(elem.car_id)
        })
    }
    //console.log('hiaa');
    //console.log(carIds)
    //console.log(insert_car_id)

    if (carIds.indexOf(parseInt(insert_car_id)) == -1) {
        return await db('booking_details').insert(insertData);
    } else {
        return 0;
    }
}
//##################################

//###########cars list for user #########
const listcar = async (cond, page, searchData) => {

    console.log('req.query');
    console.log(searchData)

    var carIds = [0]
    if (searchData != undefined) {
        //##########check car is already bookede################
        var carIdsArr = await checkCarBook(searchData);
        carIdsArr.map((elem, index) => {
            carIds.push(elem.car_id)
        })
    }
    console.log('carIds');
    console.log(carIds);

    var sortby = 'updated_at';
    var whereData = {
        display_status: 1
    }
    var sortdirection = 'desc';

    if (searchData != undefined) {
        whereData.city_name = searchData.city
    }

    if (cond.id != undefined) {
        //whereData.id = cond.id
        whereData.id = { [Op.notIn]: carIds, [Op.in]: [cond.id] }
    } else {
        whereData.id = { [Op.notIn]: carIds }
    }
    //###########################
    var countObj = await cars.count({
        where: whereData,
        distinct: true,
        order: [
            [sortby, sortdirection],
        ],
    });
    if (countObj > 0) {
        var obj = { "car_count": "", "car_details": "" };
        var carResult;
        if (page == 'home') {
            carResult = await cars.findAll({
                where: { display_status: 1 },
                // include: [{
                //     model: users
                // }],
                limit: 6,
                order: [
                    [sortby, sortdirection],
                ],
            });
        } else {
            carResult = await cars.findAll({
                where: whereData,
                // include: [{
                //     model: users
                // }],
                order: [
                    [sortby, sortdirection],
                ],
            });
        }

        obj.car_count = countObj;
        obj.car_details = carResult;
        return obj;

    } else {
        return new Promise(function (resolve, reject) {
            resolve([]);
        });
    }
}
//#################################

//#######check car is already booked###########
const checkCarBook = async (searchData) => {

    var cond = { car_city: searchData.city, booking_status: 0 }
    var search_start_date_time = convert(searchData.startdate) + " " + searchData.starttime;
    var search_end_date_time = convert(searchData.enddate) + " " + searchData.endtime;

    var searchCond = [
        {
            [Op.and]: [
                Sequelize.where(

                    Sequelize.col("start_date_time"), '<=', search_start_date_time

                ),
                Sequelize.where(

                    Sequelize.col("end_date_time"), '>=', search_end_date_time

                ),

            ],
        },
        {
            [Op.and]: [

                Sequelize.where(

                    Sequelize.col("start_date_time"), '>=', search_start_date_time
                ),

                Sequelize.where(

                    Sequelize.col("end_date_time"), '<=', search_end_date_time

                ),

            ]
        },
        {
            [Op.and]: [

                Sequelize.where(
                    Sequelize.col("start_date_time"), '<=', search_start_date_time
                ),
                Sequelize.where(
                    Sequelize.col("end_date_time"), '<=', search_end_date_time
                ),
                Sequelize.where(
                    Sequelize.col("end_date_time"), '>=', search_start_date_time
                ),

            ]
        },
        {
            [Op.and]: [

                Sequelize.where(
                    Sequelize.col("start_date_time"), '>=', search_start_date_time
                ),
                Sequelize.where(
                    Sequelize.col("end_date_time"), '>=', search_end_date_time
                ),
                Sequelize.where(
                    Sequelize.col("start_date_time"), '<=', search_end_date_time
                ),

            ]
        }
    ]

    var booking_details1 = [];
    booking_details1 = await booking_details.findAll({
        attributes: [
            'car_id'
        ],
        where: {
            [Op.and]: [
                cond,
            ],
            [Op.or]: searchCond
        },
        include: [

        ],
        // order: [
        //     [sortby, sortdirection],
        // ],
    });

    console.log(booking_details1);
    return booking_details1;

}
//############
const convert = (str) => {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}

//#######get car#######
const listcity = async (id) => {
    return await db
        .select("*")
        .from("cities");

}
//#####################

//get car details
const getCarDetails = async (cond) => {
    return await db
        .select("*")
        .from("cars")
        .where(cond);
}
//#####################

//get user details
const getUserDetails = async (cond) => {
    return await db
        .select("*")
        .from("users")
        .where(cond);
}
//#####################

//###########cars booking list #########
const carbooklist = async (cond) => {

    var sortby = 'updated_at';
    var sortdirection = 'desc';
    //###########################
    var countObj = await booking_details.count({
        where: cond,
        distinct: true,
        order: [
            [sortby, sortdirection],
        ],
    });
    if (countObj > 0) {
        var obj = { "booking_count": "", "booking_details": "" };
        var bookingResult;
        bookingResult = await booking_details.findAll({
            where: cond,
            // include: [{
            //     model: users
            // }],
            order: [
                [sortby, sortdirection],
            ],
        });
        obj.booking_count = countObj;
        obj.booking_details = bookingResult;
        return obj;
    } else {
        return new Promise(function (resolve, reject) {
            resolve([]);
        });
    }
}
//#################################

//delete car
const deletecar = async (updateData, cond) => {
    return await db('cars')
        .where(cond)
        .update(
            updateData
        );
}

module.exports = {
    addcar,
    listcar,
    listcity,
    carbook,
    getCarDetails,
    getUserDetails,
    carbooklist,
    checkCarBook,
    updatecar,
    updateBookingStatus,
    deletecar
}