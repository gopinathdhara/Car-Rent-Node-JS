'use strict';
const db = require('../../common/db');
/* sequelize orm */
const sequelize = require('../../common/dbSequelize');
let Sequelize = require("sequelize");
const Op = Sequelize.Op;
const utils = require('../../common/utils');
//import users schema
var users = require('../../dbschemas/users');


//###########list for user #########
const listuser = async () => {

    var sortby = 'updated_at';
    var sortdirection = 'desc';

    //###########################
    var countObj = await users.count({
        where: { user_type: 1 },
        distinct: true,
        order: [
            [sortby, sortdirection],
        ],
    });
    if (countObj > 0) {

        return await users.findAll({
            where: { user_type: 1 },
            // include: [{
            //     model: users
            // }],
            order: [
                [sortby, sortdirection],
            ],
        });

    } else {
        return new Promise(function (resolve, reject) {
            resolve([]);
        });
    }
}
//#################################

//profile details
const userProfile = async (cond) => {


    //###########################
    var countObj = await users.count({
        where: cond,
        distinct: true,
        // order: [
        //     [sortby, sortdirection],
        // ],
    });
    if (countObj > 0) {

        return await users.findAll({
            where: cond,
            // include: [{
            //     model: users
            // }],
            // order: [
            //     [sortby, sortdirection],
            // ],
        });

    } else {
        return new Promise(function (resolve, reject) {
            resolve([]);
        });
    }
}
//#################################

//update profile
const updateprofile = async (updateData, cond) => {
    return await db('users')
        .where(cond)
        .update(
            updateData
        );
}
//#################


module.exports = {
    listuser,
    userProfile,
    updateprofile
}