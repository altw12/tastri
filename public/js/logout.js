function logoutMe(){
    $('#registerMenu').css('display', 'block');
    $('#loginMenu').css('display', 'block');
    $('#logoutMenu').css('display', 'none');
    $('#edit-profile').css('display', 'none');
    currUserId = null;
    sessionStorage.removeItem("token");
    
}