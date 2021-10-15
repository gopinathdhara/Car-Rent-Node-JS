'use strict';

const registrationService = require('../services/RegistrationService');

//###########registration#########
const insertUser = async (req, res, next) => {
    try {
        const data = await registrationService.insertUser(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'You have registered successfully !!!',
            data: data
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, failed to register !!!',
            error: ((err) => {
                return err.message;
            })(err),
            data: {}
        });
    }
};
//####################### 


module.exports = {
    insertUser
}