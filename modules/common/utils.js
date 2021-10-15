'use strict';

const nodemailer = require('nodemailer');
const config = require('./config');
//for file write
const fs = require('fs');
const util = require('util');
//convert callback to promise
const writefile = util.promisify(fs.writeFile);
const db = require('./db');
const logerr = (err) => {

    console.log(err);

}

const todayDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = String(today.getFullYear());

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}
const getNeedleInHaystack = (needle, haystack, property) => {
    return haystack.find(o => o[property] === needle);
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const xcitMailer = async (mailOptions) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: config.mailer
        });

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("error is " + error);
                reject(false);
            }
            else {
                console.log('Email sent: ' + info.response);
                resolve(true);
            }
        });
    });
};

const regex = {
    letters: /^[A-Za-z]+$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
    latlong: /^\d*\.?\d*$/,
    number: /^\d+$/,
    numberDecimal: /^\d*\.?\d*$/
}

const validatorfn = function (inputText, regexKey) {

    if (regex[regexKey].test(inputText)) {
        return true;
    }
    else {
        return false;
    }
};



let validator = {
    regex: regex,
    validatorfn: validatorfn
}

// file write function for base64 input and convert it image file
const fileWriteBase64Input = async (fileInput, id, folderPath, fileName, previousFile = "") => {

    /*
            let base64Image = chamber_of_commerce_registration_file.split(';base64,').pop();
            if (!fs.existsSync("./public/leads/"+user_id)){
                    fs.mkdirSync("./public/leads/"+user_id);
                }
           let file_response=await writefile('./public/leads/'+user_id+'/chamber_of_commerce_registration_file.png', base64Image, {encoding: 'base64'});
    */


    //let base64Image = fileInput.split(';base64,').pop();
    let fileInputArr = fileInput.split(';base64,');
    let base64Image = fileInputArr.pop();
    let fileExtension = fileInputArr[0].split('/').pop().split('+')[0];
    //if directory is not present then create directory   
    if (!fs.existsSync(folderPath + id)) {
        fs.mkdirSync(folderPath + id);
    }
    //unlink previous file    
    if (previousFile) {
        if (fs.existsSync(folderPath + id + '/' + previousFile)) {
            console.log(fileName + "old file exist");
            fs.unlinkSync(folderPath + id + '/' + previousFile);
        }
    }
    let file_response = await writefile(folderPath + id + '/' + fileName + '.' + fileExtension, base64Image, { encoding: 'base64' });
    return file_response;

}
//get file extension
const fileExtensionGetBase64Input = (fileInput) => {
    let fileInputArr = fileInput.split(';base64,');
    let base64Image = fileInputArr.pop();
    let fileExtension = fileInputArr[0].split('/').pop();

    return fileExtension.split('+')[0];
}
//###########common task added by Gopi start####################
//######get language id start###########
const getLanguageId = async (langSlug) => {
    return await db
        .select("id")
        .from("languages").where('lang', langSlug);
}
//######get language id end###########
//############check exist record start############
const checkExistCommon = async (tableName, id) => {
    return await db
        .select("*")
        .from(tableName).where('id', id);
}
//############check exist record end############

//############ Check restaurant owner common#############
const checkRestaurantOwnerCommon = async (req) => {
    //############check restaurants exist#############
    let lang = req.headers.lang ? req.headers.lang : 'en';
    let restaurantsExistArray;
    let businessId;
    try {
        restaurantsExistArray = await checkExistCommon("restaurants", req.body.restaurant_id);
        businessId = restaurantsExistArray[0].business_id;
    } catch (error) {
        console.log(error);
        if (restaurantsExistArray.length == 0) {
            throw Error("forui:" + (lang == 'en' ? "Restaurant does not exist" : "المطعم غير موجود"));
        }
        throw Error("forui:" + (lang == 'en' ? "Error occurred to check restaurant exist" : "حدث خطأ للتحقق من وجود المطعم"));
    }

    //#####################
    //##########check business exist############
    let businessExistArray;
    let ownerId;
    try {
        businessExistArray = await checkExistCommon("businesses", businessId);
        ownerId = businessExistArray[0].owner_id;
        //console.log("ownerid"+ownerId);
    } catch (error) {
        console.log(error);
        throw Error("forui:" + (lang == 'en' ? "Error occurred to check business exist" : "حدث خطأ للتحقق من وجود العمل"));
    }
    if (businessExistArray.length == 0) {
        throw Error("forui:" + (lang == 'en' ? "Business does not exist" : "العمل غير موجود"));
    }
    //#################
    //#########check restaurant owner############
    if (req.loggedInUser.toJSON().id != ownerId) {
        throw Error("forui:" + (lang == 'en' ? "You are not the onwer of this restaurant" : "أنت لست صاحب هذا المطعم"));
    }
    //#####################
};
//#########################
//get month
const getMonthData = (month) => {
    if (month < 10) {
        month = "0" + month;
    }
    return month;
};
//get day
const getDayData = (day) => {
    if (day < 10) {
        day = "0" + day;
    }
    return day;
};
//#######format the date###########
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
//###########################
//#######format time##########
function formatTime(today) {
    let minutes = today.getMinutes();
    let hours = today.getHours();
    let seconds = today.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let currentTime = hours + ":" + minutes + ":" + seconds;
    return currentTime;
}
//################
//###########common task added by Gopi end####################
module.exports = {
    getNeedleInHaystack,
    xcitMailer,
    getRandomInt,
    validator,
    fileWriteBase64Input,
    fileExtensionGetBase64Input,
    logerr,
    todayDate,
    //###########common task added by Gopi start####################
    getLanguageId,
    checkExistCommon,
    checkRestaurantOwnerCommon,
    getMonthData,
    getDayData,
    formatDate,
    formatTime
    //###########common task added by Gopi end####################
};