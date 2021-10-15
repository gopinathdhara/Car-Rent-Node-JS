'use strict';
const db = require('../../common/db');
/* sequelize orm */
const sequelize = require('../../common/dbSequelize');
let Sequelize = require("sequelize");
const Op = Sequelize.Op;
const utils = require('../../common/utils');

//import reviews schema
//var reviews = require('../../dbschemas/reviews');


//###########user login#########
const loginUser = async (loginData) => {
    var count = await db
        .count('id as cnt')
        .from("users").where({ 'email': loginData.email });
    var countRecord = count[0].cnt;
    if (countRecord == 0) {
        return false;
    } else {
        return await db
            .select('*')
            .from("users").where({ 'email': loginData.email });
    }
}
//##################################


module.exports = {
    loginUser
}