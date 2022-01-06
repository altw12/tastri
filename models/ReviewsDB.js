"use strict";

var db = require('../db-connections');
class ReviewsDB{
    getAllReviews(callback){
        var sql = "SELECT * from restaurant_review.review";
        db.query(sql, callback);
    }

    addReview(review, callback){
        var sql = "INSERT INTO review (restaurantId, review, rating, datePosted, userId, price) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getRestaurantId(), review.getReview(), review.getRating(), review.getDatePosted(), review.getUserId(), review.getPrice()], callback);
    }

    updateReview(review, callback){
        var sql = "UPDATE review SET review = ?, rating = ?, price = ?, datePosted = ? WHERE _id = ?";
        return db.query(sql, [review.getReview(), review.getRating(), review.getPrice(), review.getDatePosted(), review.getId()], callback);
    }

    deleteReview(reviewID, callback){
        var sql = "DELETE from review WHERE _id = ?";
        return db.query(sql, [reviewID], callback);
    }
    getReviewInfo(reviewID, callback){
        var sql = "SELECT rev._id, res.restaurantName, user.username, rev.review, rev.rating, rev.price, rev.datePosted FROM restaurant_review.review AS rev INNER JOIN restaurant_review.restaurant AS res ON rev.restaurantId = res._id INNER JOIN restaurant_review.user AS user ON rev.userId = user._id WHERE rev._id = ?";
        return db.query(sql, [reviewID], callback);
    }
}

module.exports = ReviewsDB;