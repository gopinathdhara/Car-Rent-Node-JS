const { validator } = require('../../common/utils');

//############validation for insert#################
const validateReviewsInsertBody = function (b) {
    if (!b.restaurant_id) {
        return {
            status: 0,
            msg: {
                "en": "Please provide restaurant id !!!",
                "ar": "يرجى تقديم معرف المطعم !!!"
            }
        }
    }
    if (!b.rating) {
        return {
            status: 0,
            msg: {
                "en": "Please provide rating !!!",
                "ar": "يرجى تقديم التصنيف !!!"
            }
        }
    }
    if (!b.order_no) {
        return {
            status: 0,
            msg: {
                "en": "Please provide order no !!!",
                "ar": "يرجى تقديم الطلب لا !!!"
            }
        }
    }
    if (!b.service_id) {
        return {
            status: 0,
            msg: {
                "en": "Please provide service id !!!",
                "ar": "يرجى تقديم معرف الخدمة !!!"
            }
        }
    }
    return { status: 1 };
}
//########################
//############validation for update#################
const validateReviewsUpdateBody = function (b) {
    if (!b.review_id) {
        return {
            status: 0,
            msg: {
                "en": "Please provide review id !!!",
                "ar": "يرجى تقديم معرف المراجعة !!!"
            }
        }
    }
    return { status: 1 };
}
//####################################
//############validation for delete#################
const validateReviewsDeleteBody = function (b) {
    if (!b.review_id) {
        return {
            status: 0,
            msg: {
                "en": "Please provide review id !!!",
                "ar": "يرجى تقديم معرف المراجعة !!!"
            }
        }
    }
    return { status: 1 };
}
//####################################
//############validation for list#################
const validateReviewsListBody = function (b) {
    if (!b.restaurant_id) {
        return {
            status: 0,
            msg: {
                "en": "Please provide restaurant id !!!",
                "ar": "يرجى تقديم معرف المطعم !!!"
            }
        }
    }
    return { status: 1 };
}
//####################################
//##########format listing###########
const formatServiceDataForUI = (eachService) => {
    return eachService;
}
//############################

module.exports = {
    validateReviewsInsertBody,
    validateReviewsUpdateBody,
    validateReviewsListBody,
    validateReviewsDeleteBody,
    formatServiceDataForUI
}