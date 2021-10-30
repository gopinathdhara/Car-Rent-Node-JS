const dotenv = require('dotenv');
dotenv.config();
const knex = require('knex')({
    client: 'mysql2',

    //for local db setup
    // connection: {
    //     host: '127.0.0.1',
    //     user: 'root',
    //     password: '',
    //     database: 'car_rent_db'
    // },

    //for aws server set up 
    connection: {
        host: 'localhost',
        user: 'phpmyadmin',
        password: 'Gopi@123456',
        database: 'car_rent_db'
    },

    pool: { min: 0, max: 7 }
});

module.exports = knex;
