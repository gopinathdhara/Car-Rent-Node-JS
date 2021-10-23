'use strict';

const usersService = require('../services/UsersService');

//###########users list #########
const listuser = async (req, res, next) => {
    try {
        const data = await usersService.listuser(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'Users fetched successfully !!!',
            data: data

        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, failed to get users !!!',
            error: ((err) => {
                return err.message
            })(err),
            data: {}
        });
    }
};
//#####################

//my profile
const myprofile = async (req, res, next) => {
    try {
        const data = await usersService.myprofile(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'Users fetched successfully !!!',
            data: data

        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, failed to get users !!!',
            error: ((err) => {
                return err.message
            })(err),
            data: {}
        });
    }
};
//#####################

//update profile
const updateprofile = async (req, res, next) => {
    try {
        const data = await usersService.updateprofile(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'Profile updated successfully !!!',
            data: data

        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, failed to update profile !!!',
            error: ((err) => {
                return err.message
            })(err),
            data: {}
        });
    }
};
//#####################


module.exports = {
    listuser,
    myprofile,
    updateprofile
}