/* sequelize orm */
const sequelize = require('../common/dbSequelize');
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
//########### sequelize model schema############

const booking_details = sequelize.define('booking_details', {

    user_id: {
        type: Sequelize.INTEGER,
        field: "user_id"
    },
    car_id: {
        type: Sequelize.INTEGER,
        field: "car_id"
    },
    car_name: {
        type: Sequelize.STRING,
        field: "car_name"
    },
    car_no: {
        type: Sequelize.STRING,
        field: "car_no"
    },
    user_name: {
        type: Sequelize.STRING,
        field: "user_name"
    },
    user_email: {
        type: Sequelize.STRING,
        field: "user_email"
    },
    user_phone: {
        type: Sequelize.STRING,
        field: "user_phone"
    },
    user_address: {
        type: Sequelize.STRING,
        field: "user_address"
    },
    car_city: {
        type: Sequelize.STRING,
        field: "car_city"
    },
    start_date: {
        type: Sequelize.STRING,
        field: "start_date"
    },
    end_date: {
        type: Sequelize.STRING,
        field: "end_date"
    },
    start_time: {
        type: Sequelize.STRING,
        field: "start_time"
    },
    end_time: {
        type: Sequelize.STRING,
        field: "end_time"
    },
    pickup_location: {
        type: Sequelize.STRING,
        field: "pickup_location"
    },
    dropoff_location: {
        type: Sequelize.STRING,
        field: "dropoff_location"
    },
    user_details: {
        type: Sequelize.STRING,
        field: "user_details"
    },
    car_details: {
        type: Sequelize.STRING,
        field: "car_details"
    },
    booking_status: {
        type: Sequelize.INTEGER,
        field: "booking_status"
    },
    car_price_per_hour: {
        type: Sequelize.DOUBLE,
        field: "car_price_per_hour"
    },
    total_price: {
        type: Sequelize.DOUBLE,
        field: "total_price"
    },
    start_date_time: {
        type: Sequelize.STRING,
        field: "start_date_time"
    },
    end_date_time: {
        type: Sequelize.STRING,
        field: "end_date_time"
    },
    created_by: {
        type: Sequelize.INTEGER,
        field: "created_by"
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

module.exports = booking_details;