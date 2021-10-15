'use strict';
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mailer: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD
    }
};