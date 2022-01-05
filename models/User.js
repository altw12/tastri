"use strict"

class User {
    constructor(id, username, profilePic, bio, password){
        this.id = id;
        this.username = username;  
        this.profilePic = profilePic;
        this.bio = bio;
        this.password = password;
    }
    getId(){
        return this.id;
    }
    getUsername(){
        return this.username;
    }
    getProfilePic(){
        return this.profilePic;
    }
    getBio(){
        return this.bio;
    }
    getPassword(){
        return this.password;
    }
    setId(id){
        this.id = id;
    }
    setUsername(username){
        this.username = username;
    }
    setProfilePic(profilePic){
        this.profilePic = profilePic;
    }
    setBio(bio){
        this.bio = bio;
    }
    setPassword(password){
        this.password = password;
    }
}

module.exports = User;