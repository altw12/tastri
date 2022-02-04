$(document).ready(function(){
    var token = sessionStorage.getItem("token");
    if(token != null){
        $('#registerMenu').css('display', 'none');
        $('#loginMenu').css('display', 'none');
        $('#logoutMenu').css('display', 'block');
    }
});

//cant hide or show doesnt work