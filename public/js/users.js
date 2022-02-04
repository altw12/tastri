function fetchUsers(){
    var request = new XMLHttpRequest();
    request.open('GET', user_url, true);
    request.onload = function(){
        user_array = JSON.parse(request.responseText);
        console.log(user_array);
    };
    request.send();
}

function updateUser() {
    if(currUserId==null){
        window.alert("You have to log in first.");
        return;
    }
    for(var k = 0; k < user_array.length; k++){
        if(user_array[k]._id===currUserId){
            var no = k;
        }
    }
    var response = confirm("Are you sure you want to update this user?");
    if (response == true) {
        var edit_user_url = user_url + "/" + user_array[no]._id;
        var updateUser = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateUser.open("PUT", edit_user_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateUser.setRequestHeader("Content-Type", "application/json");  
        user_array[no].bio = document.getElementById("edit-profile-bio").value;
        user_array[no].firstName = document.getElementById("edit-profile-firstname").value;
        user_array[no].lastName = document.getElementById("edit-profile-lastname").value;
        user_array[no].gender = document.getElementById("edit-profile-gender").value;
        user_array[no].address = document.getElementById("edit-profile-address").value;
        user_array[no].mobileNumber = document.getElementById("edit-profile-mobilenumber").value;
        user_array[no].email = document.getElementById("edit-profile-email").value;
        var temp = JSON.parse(JSON.stringify(user_array[no]));
        var temptoken = sessionStorage.getItem("token");
        temp.token = temptoken;
        updateUser.onload = function() {
            fetchUsers();
        };
        updateUser.send(JSON.stringify(temp));
    }
}