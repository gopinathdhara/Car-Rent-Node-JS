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


module.exports = {
    insertUser
}