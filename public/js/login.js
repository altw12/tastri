function loginMe(){
    var loginUser = new XMLHttpRequest();

    loginUser.open("POST", "http://127.0.0.1:8000/login", true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload=function(){
        $('#loginModal').modal('hide');
        var token = JSON.parse(loginUser.responseText);
        if(token.result != false){
            $('#successModal').modal('show');
            $('#registerMenu').css('display', 'none');
            $('#loginMenu').css('display', 'none');
            $('#logoutMenu').css('display', 'block');
            $('#edit-profile').css('display', 'block');
            sessionStorage.setItem("token", token.result);
            for(var k = 0; k < user_array.length; k++){
                if(user_array[k].username===document.getElementById("login-username").value){
                    currUserId = user_array[k]._id;
                }
            }
        }
        else {
            $('#failureModal').modal('show');
        }
    }
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var payload = {username:username, password:password}
    loginUser.send(JSON.stringify(payload));
}