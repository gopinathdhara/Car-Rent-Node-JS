'use strict';
const db = require('../../common/db');
/* sequelize orm */
const sequelize = require('../../common/dbSequelize');
let Sequelize = require("sequelize");
const Op = Sequelize.Op;
const utils = require('../../common/utils');

//import reviews schema
//var reviews = require('../../dbschemas/reviews');


//###########user insert#########
const insertUser = async (insertData) => {

    return await db('users').insert(insertData);
}
//##################################

const checkEmailExist = async (cond) => {
    var count = await db
        .count('id as cnt')
        .from("users").where(cond);
    var countRecord = count[0].cnt;
    if (countRecord == 0) {
        return true;
    } else {
        return false; //already exist
    }
}

module.exports = {
    insertUser,
    checkEmailExist
}