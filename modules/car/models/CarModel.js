'use strict';
const db = require('../../common/db');
/* sequelize orm */
const sequelize = require('../../common/dbSequelize');
let Sequelize = require("sequelize");
const Op = Sequelize.Op;
const utils = require('../../common/utils');
//import cars schema
var cars = require('../../dbschemas/cars');

//###########car insert#########
const addcar = async (insertData) => {
    return await db('cars').insert(insertData);
}
//##################################

//###########car book#########
const carbook = async (insertData) => {
    return await db('booking_details').insert(insertData);
}
//##################################

//###########cars list for user #########
const listcar = async (cond, page) => {

    var sortby = 'updated_at';
    var whereData = {
    }
    var sortdirection = 'desc';
    if (cond.id != undefined) {
        whereData.id = cond.id
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
                where: whereData,
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

//
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

module.exports = {
    addcar,
    listcar,
    listcity,
    carbook,
    getCarDetails,
    getUserDetails
}