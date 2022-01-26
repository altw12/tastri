"use strict";

const RestaurantsDB = require('../models/RestaurantsDB');

var restaurantsDB = new RestaurantsDB();

function getAllRestaurants(request, respond){
    restaurantsDB.getAllRestaurants(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantReviews(request, respond){
    restaurantsDB.getRestaurantReviews(request.params.id, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantAverageRating(request, respond){
    restaurantsDB.getRestaurantAverageRating(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getRestaurantAveragePriceRating(request, respond){
    restaurantsDB.getRestaurantAveragePriceRating(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllRestaurants, getRestaurantReviews, getRestaurantAverageRating, getRestaurantAveragePriceRating};