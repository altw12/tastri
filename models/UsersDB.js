"use strict";

var db = require('../db-connections');
class UsersDB{
    getAllUsers(callback){
        var sql = "SELECT * from restaurant_review.user";
        db.query(sql, callback);
    }
    
    addUser(user, callback){
        var sql = "INSERT INTO user (username, profilePic, bio, password, firstName, lastName, gender, address, mobileNumber, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [user.getUsername(), user.getProfilePic(), user.getBio(), user.getPassword(), user.getFirstName(), user.getLastName(), user.getGender(), user.getAddress(), user.getMobileNumber(), user.getEmail()], callback);
    }

    updateUser(user, callback){
        var sql = "UPDATE user SET username = ?, profilePic = ?, bio = ?, password = ?, firstName = ?, lastName = ?, gender = ?, address = ?, mobileNumber = ?, email = ? WHERE _id = ?";
        return db.query(sql, [user.getUsername(), user.getProfilePic(), user.getBio(), user.getPassword(), user.getFirstName(), user.getLastName(), user.getGender(), user.getAddress(), user.getMobileNumber(), user.getEmail(), user.getId()], callback);
    }

    deleteUser(userID, callback){
        var sql = "DELETE from user WHERE _id = ?";
        return db.query(sql, [userID], callback);
    }

    getLoginInfo(username, callback){
        var sql = "SELECT password FROM restaurant_review.user WHERE username = ?";
        return db.query(sql, [username], callback);
    }

    getAllUserReviews(userID, callback){
        var sql = "SELECT res.restaurantName, rev.review, rev.rating, rev.price, rev.datePosted FROM restaurant_review.user AS user INNER JOIN restaurant_review.review AS rev ON rev.userId = user._id INNER JOIN restaurant_review.restaurant AS res ON res._id = rev.restaurantId WHERE user._id = ?";
        return db.query(sql, [userID], callback);
    }

}

module.exports = UsersDB;