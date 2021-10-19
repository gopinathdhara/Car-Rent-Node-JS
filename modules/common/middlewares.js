
const utils = require('./utils');
let jwt = require("jsonwebtoken");

const sendErrorResponse = (res, lang, enmsg, armsg) => {
    //#######changes status code 403 by Gopi
    return res.status(403).send({
        statusCode: 403,
        message: lang == 'en' ? enmsg : armsg,
        error: lang == 'en' ? enmsg : armsg,
        data: {}
    });
}
//token verification for admin
const verifyToken = async (req, res, next) => {
    //console.log('req.headers');
    //console.log(req.headers);
    var userFlag = true;
    try {
        var decoded = await jwt.verify(req.headers.token, 'secret');
        req.usertoken = decoded;
        console.log(req.usertoken);
    } catch (err) {
        userFlag = false;
        res.status(400).send({ "status": 400, 'message': 'Token is missing or expired' });
    }
    if (req.usertoken.userType != 2) {
        res.status(400).send({ "status": 400, 'message': 'You are not authorized to add car' });
    }
    if (req.usertoken.userType == 2 && userFlag) {
        next();
    }
}
//token verification for user
const verifyTokenUser = async (req, res, next) => {
    //console.log('req.headers');
    //console.log(req.headers);
    var userFlag = true;
    try {
        var decoded = await jwt.verify(req.headers.token, 'secret');
        req.usertoken = decoded;
        //console.log(req.usertoken);
    } catch (err) {
        userFlag = false;
        res.status(400).send({ "status": 400, 'message': 'Token is missing or expired' });
    }
    if (req.usertoken.userType != 1) {
        res.status(400).send({ "status": 400, 'message': 'You are not authorized to book the car' });
    }
    if (req.usertoken.userType == 1 && userFlag) {
        next();
    }
}

//token verification for admin and user
const verifyTokenUserAdmin = async (req, res, next) => {
    //console.log('req.headers');
    //console.log(req.headers);
    var userFlag = true;
    try {
        var decoded = await jwt.verify(req.headers.token, 'secret');
        req.usertoken = decoded;
        //console.log(req.usertoken);
    } catch (err) {
        userFlag = false;
        res.status(400).send({ "status": 400, 'message': 'Token is missing or expired' });
    }
    if (userFlag) {
        next();
    }
}

const verifyAccess = (req, res, next) => {
    next();
}
const verifyIsPartner = (req, res, next) => {
    next();
}
//##############################
module.exports = {
    verifyToken,
    verifyAccess,
    verifyIsPartner,
    verifyTokenUser,
    verifyTokenUserAdmin
};