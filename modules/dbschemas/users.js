/* sequelize orm */
const sequelize = require('../common/dbSequelize');
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
//########### sequelize model schema############

const users = sequelize.define('users', {
    firstname: {
        type: Sequelize.STRING,
        field: "firstname"
    },
    middlename: {
        type: Sequelize.STRING,
        field: "middlename"
    },
    lastname: {
        type: Sequelize.STRING,
        field: "lastname"
    },
    email: {
        type: Sequelize.STRING,
        field: "email"
    },
    phone: {
        type: Sequelize.STRING,
        field: "phone"
    },
    date_of_birth: {
        type: Sequelize.STRING,
        field: "date_of_birth"
    },
    gender: {
        type: Sequelize.STRING,
        field: "gender"
    },
    googleid: {
        type: Sequelize.STRING,
        field: "googleid"
    },
    fbid: {
        type: Sequelize.STRING,
        field: "fbid"
    },
    user_type: {
        type: Sequelize.INTEGER,
        field: "user_type"
    },
    profile_pic: {
        type: Sequelize.STRING,
        field: "profile_pic"
    },
    status: {
        type: Sequelize.INTEGER,
        field: "status"
    },
    otp_validation_status: {
        type: Sequelize.INTEGER,
        field: "otp_validation_status"
    },
    approval_status: {
        type: Sequelize.INTEGER,
        field: "approval_status"
    },
    documents_upload_status: {
        type: Sequelize.INTEGER,
        field: "documents_upload_status"
    },
    notes: {
        type: Sequelize.STRING,
        field: "notes"
    },
    package_name: {
        type: Sequelize.STRING,
        field: "package_name"
    },
    price: {
        type: Sequelize.STRING,
        field: "price"
    },
    payment_date: {
        type: Sequelize.STRING,
        field: "payment_date"
    },
    start_date: {
        type: Sequelize.STRING,
        field: "start_date"
    },
    end_date: {
        type: Sequelize.STRING,
        field: "end_date"
    },
    restaurant_static_role_id: {
        type: Sequelize.INTEGER,
        field: "restaurant_static_role_id"
    },
    tap_company_customer_id: {
        type: Sequelize.STRING,
        field: "tap_company_customer_id"
    },
    created_updated_by: {
        type: Sequelize.INTEGER,
        field: "created_updated_by"
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