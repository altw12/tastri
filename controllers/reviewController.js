"use strict";
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');

var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond){
    reviewsDB.getAllReviews(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addReview(request, respond){
    var now = new Date();
    var review = new Review(null, request.body.restaurantId, request.body.review, request.body.rating, now.toString(), request.body.userId, request.body.price);
    reviewsDB.addReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function updateReview(request, respond){
    var now = new Date();
    var review = new Review(parseInt(request.params.id), request.body.restaurantId, request.body.review, request.body.rating, now.toString(), request.body.userId, request.body.price);
    reviewsDB.updateReview(review, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReview(request, respond){
    reviewsDB.deleteReview(request.params.id, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getReviewInfo(request, respond){
    reviewsDB.getReviewInfo(request.params.id, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


module.exports = {getAllReviews, addReview, updateReview, deleteReview, getReviewInfo};