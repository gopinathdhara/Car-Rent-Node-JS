'use strict';

const carService = require('../services/CarService');

//###########car insert#########
const addcar = async (req, res, next) => {
    try {
        const data = await carService.addcar(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'Car inserted successfully !!!',
            data: data
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, failed to insert car !!!',
            error: ((err) => {
                err.message
            })(err),
            data: {}
        });
    }
};

//###########car list for all#########
const listcar = async (req, res, next) => {
    try {
        const data = await carService.listcar(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'Car fetched successfully !!!',
            data: data

        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, Unable to fetch cars !!!',
            error: ((err) => {
                err.message
            })(err),
            data: {}
        });
    }
};
//#####################


//###########city list for all#########
const listcity = async (req, res, next) => {
    try {
        const data = await carService.listcity(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'Cities fetched successfully !!!',
            data: data

        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, Unable to fetch cities !!!',
            error: ((err) => {
                err.message
            })(err),
            data: {}
        });
    }
};
//#####################


//car book
const carbook = async (req, res, next) => {
    try {
        const data = await carService.carbook(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'Car booked successfully !!!',
            data: data
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, failed to insert car booking details !!!',
            error: ((err) => {
                err.message
            })(err),
            data: {}
        });
    }
};

module.exports = {
    addcar,
    listcar,
    listcity,
    carbook
}