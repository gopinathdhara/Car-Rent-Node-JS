const RestaurantService = require("../restaurants/services/RestaurantsService");
const BusinessService = require("../businesses/services/BusinessService");

const isRestaurantBelongToPartner = async (restaurant_id, partner_id) => {
    const businessDetails = await BusinessService.getByOwnerId(partner_id);
    if (businessDetails && Array.isArray(businessDetails) && businessDetails.length > 0) {
        const restaurantDetails = await RestaurantService.getByBusinessId(businessDetails[0].id);
        if (restaurantDetails && Array.isArray(restaurantDetails) && restaurantDetails.length > 0) {
            if (restaurantDetails[0].id == restaurant_id) {
                restaurantDetails[0].businessDetails = businessDetails;
                return restaurantDetails;
            }
        }
    }
    return false;

}

const isServiceBelongToRestaurant = async (service_id, restaurantDetails) => {

    if (restaurantDetails && Array.isArray(restaurantDetails) && restaurantDetails.length > 0) {
        if (restaurantDetails[0].serviceIds.includes(service_id)) {
            return true;
        }
    }
    return false;

}

module.exports = {
    isRestaurantBelongToPartner,
    isServiceBelongToRestaurant
};