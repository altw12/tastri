"use strict";

var db = require('../db-connections');
class RestaurantsDB{
    getAllRestaurants(callback){
        var sql = "SELECT * from restaurant_review.restaurant";
        db.query(sql, callback);
    }
    getRestaurantReviews(resID, callback){
        var sql = "SELECT user.username, rev.review, rev.rating, rev.price, rev.datePosted FROM restaurant_review.restaurant AS res INNER JOIN restaurant_review.review AS rev ON rev.restaurantId = res._id INNER JOIN restaurant_review.user AS user ON user._id = rev.userId WHERE res._id = ?";
        return db.query(sql, [resID], callback);
    }
    getRestaurantAverageRating(resID, callback){
        var sql = "SELECT AVG(rev.rating) FROM restaurant_review.restaurant AS res INNER JOIN restaurant_review.review AS rev ON rev.restaurantId = res._id WHERE res._id = ?";
        return db.query(sql, [resID], callback);
    }
    getRestaurantAveragePriceRating(resID, callback){
        var sql = "SELECT AVG(rev.price) FROM restaurant_review.restaurant AS res INNER JOIN restaurant_review.review AS rev ON rev.restaurantId = res._id WHERE res._id = ?";
        return db.query(sql, [resID], callback);
    }
}

module.exports = RestaurantsDB;