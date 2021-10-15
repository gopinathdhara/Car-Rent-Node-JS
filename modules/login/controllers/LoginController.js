'use strict';

const loginService = require('../services/LoginService');

//###########login#########
const loginUser = async (req, res, next) => {
    try {
        const data = await loginService.loginUser(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'You have logged in successfully !!!',
            data: data
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, failed to login !!!',
            error: ((err) => {
                return err.message;
            })(err),
            data: {}
        });
    }
};
//####################### 


module.exports = {
    loginUser
}