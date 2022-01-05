"use strict"

class Review {
    constructor(id, restaurantId, review, rating, datePosted, userId, price){
        this.id = id;
        this.restaurantId = restaurantId;
        this.review = review;
        this.rating = rating;
        this.datePosted = datePosted;
        this.userId = userId;
        this.price = price;
    }

    getId(){
        return this.id;
    }

    setId(id){
        this.id = id;
    }

    getRestaurantId(){
        return this.restaurantId;
    }

    setRestaurantId(restaurantId){
        this.restaurantId = restaurantId;
    }

    getReview(){
        return this.review;
    }

    setReview(review){
        this.review = review;
    }

    getRating(){
        return this.rating;
    }

    setRating(rating){
        this.rating = rating;
    }

    getDatePosted(){
        return this.datePosted;
    }

    setDatePosted(datePosted){
        this.datePosted = datePosted;
    }

    getUserId(){
        return this.userId;
    }

    setUserId(userId){
        this.userId = userId;
    }

    getPrice(){
        return this.price;
    }

    setPrice(price){
        this.price = price;
    }
}

module.exports = Review;