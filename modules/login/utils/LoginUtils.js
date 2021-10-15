const { validator } = require('../../common/utils');

//############validation for insert#################
const validateRegisterInsertBody = function (b) {
    if (!b.name) {
        return {
            status: 0,
            msg: "Please provide name !!!"
        }
    }
    if (!b.email) {
        return {
            status: 0,
            msg: "Please provide email !!!"
        }
    }
    if (!b.phone) {
        return {
            status: 0,
            msg: "Please provide phone !!!"
        }
    }
    if (!b.address) {
        return {
            status: 0,
            msg: "Please provide address !!!"
        }
    }
    if (!b.password) {
        return {
            status: 0,
            msg: "Please provide password !!!"
        }
    }
    if (!b.name_on_driving_license) {
        return {
            status: 0,
            msg: "Please provide name as on driving license !!!"
        }
    }
    return { status: 1 };
}
//########################
//##########format listing###########
const formatServiceDataForUI = (eachService) => {
    return eachService;
}
//############################

module.exports = {
    validateRegisterInsertBody,
    formatServiceDataForUI
}