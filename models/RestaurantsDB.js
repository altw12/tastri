"use strict";

var db = require('../db-connections');
class RestaurantsDB{
    getAllRestaurants(callback){
        var sql = "SELECT * from restaurant_review.restaurant";
        db.query(sql, callback);
    }
    
}


module.exports = RestaurantsDB;