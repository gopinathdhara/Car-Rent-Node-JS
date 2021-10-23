/* sequelize orm */
const sequelize = require('../common/dbSequelize');
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
//########### sequelize model schema############

const users = sequelize.define('users', {
    gender: {
        type: Sequelize.STRING,
        field: "gender"
    },
    name: {
        type: Sequelize.STRING,
        field: "name"
    },
    email: {
        type: Sequelize.STRING,
        field: "email"
    },
    phone: {
        type: Sequelize.STRING,
        field: "phone"
    },
    password: {
        type: Sequelize.STRING,
        field: "password"
    },
    name_on_driving_license: {
        type: Sequelize.STRING,
        field: "name_on_driving_license"
    },
    address: {
        type: Sequelize.STRING,
        field: "address"
    },
    user_type: {
        type: Sequelize.INTEGER,
        field: "user_type"
    },
    created_at: {
        field: 'created_at',
        type: 'TIMESTAMP',
    },
    updated_at: {
        field: 'updated_at',
        type: 'TIMESTAMP',
    },
}, {
    timestamps: false
});

module.exports = users;