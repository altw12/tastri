function registerMe(){
    var registerUser = new XMLHttpRequest();

    registerUser.open("POST", "http://127.0.0.1:8000/users", true);
    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload=function(){
        console.log("ok")
    }

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var payload = {username:username, password:password}
    registerUser.send(JSON.stringify(payload));
    

}