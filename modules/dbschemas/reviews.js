/* sequelize orm */
const sequelize = require('../common/dbSequelize');
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
//########### sequelize model schema############

const reviews = sequelize.define('reviews', {

    user_id: {
        type: Sequelize.INTEGER,
        field: "user_id"
    },
    restaurant_id: {
        type: Sequelize.INTEGER,
        field: "restaurant_id"
    },
    rating: {
        type: Sequelize.DECIMAL,
        field: "rating"
    },
    review_text: {
        type: Sequelize.STRING,
        field: "review_text"
    },
    service_id: {
        type: Sequelize.INTEGER,
        field: "service_id"
    },
    order_no: {
        type: Sequelize.STRING,
        field: "order_no"
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

module.exports = reviews;