var Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

//for local db setup
// let host = '127.0.0.1';
// let user = 'root';
// let password = '';
// let database = 'car_rent_db';
// var sequelize = new Sequelize(database, user, password, {
//     host: host,
//     port: '3306',
//     dialect: 'mysql'
// });

//for aws server set up
let host = 'localhost';
let user = 'phpmyadmin';
let password = 'Gopi@123456';
let database = 'car_rent_db';
var sequelize = new Sequelize(database, user, password, {
    host: host,
    port: '3306',
    dialect: 'mysql'
});

sequelize.authenticate().then(function (err) {
    if (!!err) {
        console.log('Unable to connect to the database:', err)
    } else {
        console.log('Connection has been established successfully.')
    }
});

module.exports = sequelize;