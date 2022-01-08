"use strict";
const UsersDB = require('../models/UsersDB');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const req = require('express/lib/request');

var jwt = require('jsonwebtoken');
var usersDB = new UsersDB();
var secretkey = "fartbaby";

function getAllUsers(request, respond){
    usersDB.getAllUsers(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addUser(request, respond){

    var username = request.body.username;
    var password = request.body.password;
    password = bcrypt.hashSync(password, 10);

    var user = new User(null, username, request.body.profilePic, request.body.bio, password, request.body.firstName, request.body.lastName, request.body.gender, request.body.address, request.body.mobileNumber, request.body.email);

    usersDB.addUser(user, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function updateUser(request, respond){
    var password = request.body.password;
    password = bcrypt.hashSync(password, 10);

    var user = new User(parseInt(request.params.id), request.body.username, request.body.profilePic, request.body.bio, password, request.body.firstName, request.body.lastName, request.body.gender, request.body.address, request.body.mobileNumber, request.body.email);
    var token = request.body.token; //need token to update
    try {
        var decoded = jwt.verify(token, secretkey);
        usersDB.updateUser(user, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({result:"invalid token"});
    }
}

function deleteUser(request, respond){
    usersDB.deleteUser(request.params.id, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getLoginInfo(request, respond){

    var username = request.body.username;
    var password = request.body.password;

    usersDB.getLoginInfo(username, function(error, result){
        if(error){
            respond.json(error);    
        }
        else{
            const hash = result[0].password;
            var flag = bcrypt.compareSync(password, hash);
            if (flag) {
                var token = jwt.sign(username, secretkey);
                respond.json({result:token});
                // respond.json({result:hash});
            }
            else{
                respond.json({result:"invalid"});
            }
        }
    });
}

function getAllUserReviews(request, respond){
    usersDB.getAllUserReviews(request.params.id, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllUsers, addUser, updateUser, deleteUser, getLoginInfo, getAllUserReviews};