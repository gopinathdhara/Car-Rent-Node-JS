const dotenv = require('dotenv');
dotenv.config();
const knex = require('knex')({
    client: 'mysql2',
    // connection: {
    //     host: '127.0.0.1',
    //     user: 'root',
    //     password: '',
    //     database: 'car_rent_db'
    // },
    connection: {
        host: 'localhost',
        user: 'phpmyadmin',
        password: 'Gopi@123456',
        database: 'car_rent_db'
    },
    pool: { min: 0, max: 7 }
});

module.exports = knex;
