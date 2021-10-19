/* sequelize orm */
const sequelize = require('../common/dbSequelize');
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
//########### sequelize model schema############

const cars = sequelize.define('cars', {

    car_name: {
        type: Sequelize.STRING,
        field: "car_name"
    },
    car_no: {
        type: Sequelize.STRING,
        field: "car_no"
    },
    no_of_seats: {
        type: Sequelize.INTEGER,
        field: "no_of_seats"
    },
    is_ac: {
        type: Sequelize.INTEGER,
        field: "is_ac"
    },
    mileage: {
        type: Sequelize.STRING,
        field: "mileage"
    },
    is_manual: {
        type: Sequelize.INTEGER,
        field: "is_manual"
    },
    other_details: {
        type: Sequelize.STRING,
        field: "other_details"
    },
    important_details: {
        type: Sequelize.STRING,
        field: "important_details"
    },
    no_of_large_bags: {
        type: Sequelize.INTEGER,
        field: "no_of_large_bags"
    },
    no_of_small_bags: {
        type: Sequelize.INTEGER,
        field: "no_of_small_bags"
    },
    price_per_hour: {
        type: Sequelize.DOUBLE,
        field: "price_per_hour"
    },
    fuel_type: {
        type: Sequelize.STRING,
        field: "fuel_type"
    },
    fuel_tank_capacity: {
        type: Sequelize.STRING,
        field: "fuel_tank_capacity"
    },
    car_image: {
        type: Sequelize.STRING,
        field: "car_image"
    },
    city_name: {
        type: Sequelize.STRING,
        field: "city_name"
    },
    brand_name: {
        type: Sequelize.STRING,
        field: "brand_name"
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

module.exports = cars;