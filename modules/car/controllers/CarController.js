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
                return err.message
            })(err),
            data: {}
        });
    }
};


//###########car update#########
const updatecar = async (req, res, next) => {
    try {
        const data = await carService.updatecar(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'Car updated successfully !!!',
            data: data
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, failed to update car !!!',
            error: ((err) => {
                return err.message
            })(err),
            data: {}
        });
    }
};
//##################


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
                return err.message
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
                return err.message
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
                return err.message
            })(err),
            data: {}
        });
    }
};

//car book list
const carbooklist = async (req, res, next) => {
    try {
        const data = await carService.carbooklist(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'Car booking information successfully !!!',
            data: data

        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, Unable to fetch car booking information !!!',
            error: ((err) => {
                return err.message
            })(err),
            data: {}
        });
    }
};
//#####################

//update Booking Status
const updateBookingStatus = async (req, res, next) => {
    try {
        const data = await carService.updateBookingStatus(req);
        return res.status(200).send({
            statusCode: 200,
            message: 'Booking status updated successfully !!!',
            data: data
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            statusCode: 400,
            message: 'Sorry, we are having some issues, failed to update booking status !!!',
            error: ((err) => {
                return err.message
            })(err),
            data: {}
        });
    }
};
//##################

module.exports = {
    addcar,
    listcar,
    listcity,
    carbook,
    carbooklist,
    updatecar,
    updateBookingStatus
}