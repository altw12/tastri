"use strict"

class User {
    constructor(id, username, profilePic, bio, password, firstName, lastName, gender, address, mobileNumber, email){
        this.id = id;
        this.username = username;  
        this.profilePic = profilePic;
        this.bio = bio;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.address = address;
        this.mobileNumber = mobileNumber;
        this.email = email;
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
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getGender(){
        return this.gender;
    }
    getAddress(){
        return this.address;
    }
    getMobileNumber(){
        return this.mobileNumber;
    }
    getEmail(){
        return this.email;
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
    setFirstName(firstName){
        this.firstName = firstName;
    }
    setLastName(lastName){
        this.lastName = lastName;
    }
    setGender(gender){
        this.gender = gender;
    }
    setAddress(address){
        this.address = address;
    }
    setMobileNumber(mobileNumber){
        this.mobileNumber = mobileNumber;
    }
    setEmail(email){
        this.email = email;
    }
}

module.exports = User;