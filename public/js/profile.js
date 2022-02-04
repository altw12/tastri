function showProfileDetails(element){
    var uid = element.getAttribute("uid");
    document.getElementById("profile-username").textContent = user_array[uid].username;
    document.getElementById("profile-bio").textContent = user_array[uid].bio;
    if(user_array[uid].firstName!=null){
        document.getElementById("profile-firstname").textContent = user_array[uid].firstName;
    }
    else{
        document.getElementById("profile-firstname").textContent = "Not set yet.";
    }
    if(user_array[uid].lastName!=null){
        document.getElementById("profile-lastname").textContent = user_array[uid].lastName;
    }
    else{
        document.getElementById("profile-lastname").textContent = "Not set yet.";
    }
    if(user_array[uid].gender!=null){
        document.getElementById("profile-gender").textContent = user_array[uid].gender;
    }
    else{
        document.getElementById("profile-gender").textContent = "Not set yet.";
    }
    if(user_array[uid].address!=null){
        document.getElementById("profile-address").textContent = user_array[uid].address;
    }
    else{
        document.getElementById("profile-address").textContent = "Not set yet.";
    }
    if(user_array[uid].mobileNumber!=null){
        document.getElementById("profile-mobilenumber").textContent = user_array[uid].mobileNumber;
    }
    else{
        document.getElementById("profile-mobilenumber").textContent = "Not set yet.";
    }
    if(user_array[uid].email!=null){
        document.getElementById("profile-email").textContent = user_array[uid].email;
    }
    else{
        document.getElementById("profile-email").textContent = "Not set yet.";
    }
    selectedUserId = user_array[uid]._id;
    document.getElementById("profile-user-reviews").innerHTML = "";
    user_review_array = [];
    for (var q = 0; q < review_array.length; q++){
        if(review_array[q].userId===selectedUserId){
            user_review_array.push(review_array[q]);
        }
    }
    for(var p = 0; p < user_review_array.length; p++){
        for(var r = 0; r < restaurant_array.length; r++){
            if(restaurant_array[r]._id===user_review_array[p].restaurantId){
                var resName = restaurant_array[r].restaurantName;
            }
        }
        var html = '<div class="text-center" style="width:100%;">\
                            <div class="card">\
                                <div class="card-body">\
                                    <p class="card-text" id="rating">' + user_review_array[p].review + "</p>\
                                    <small> @ " + user_review_array[p].datePosted + "</small>\
                                    <p>Rating: " + user_review_array[p].rating +"</p><p>Price Rating: " + user_review_array[p].price + "</p>\
                                    <p>For: " + resName + "</p>\
                                </div>" +
                            "</div>\
                        </div>";
        document.getElementById("profile-user-reviews").insertAdjacentHTML('beforeend', html);
    }
}

function editProfile(){
    for(var k = 0; k < user_array.length; k++){
        if(user_array[k]._id===currUserId){
            var no = k;
        }
    }
    document.getElementById("edit-profile-bio").value = user_array[no].bio;
    document.getElementById("edit-profile-firstname").value = user_array[no].firstName;
    document.getElementById("edit-profile-lastname").value = user_array[no].lastName;
    document.getElementById("edit-profile-gender").value = user_array[no].gender;
    document.getElementById("edit-profile-address").value = user_array[no].address;
    document.getElementById("edit-profile-mobilenumber").value = user_array[no].mobileNumber;
    document.getElementById("edit-profile-email").value = user_array[no].email;
}