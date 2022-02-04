function registerMe(){
    var registerUser = new XMLHttpRequest();

    registerUser.open("POST", "http://127.0.0.1:8000/users", true);
    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload=function(){
        $('#registerModal').modal('hide');
        $('#successModal').modal('show');
        fetchUsers();
    }
    var username = document.getElementById("register-username").value;
    var password = document.getElementById("register-password").value;
    var payload = {username:username, password:password}
    registerUser.send(JSON.stringify(payload));
}