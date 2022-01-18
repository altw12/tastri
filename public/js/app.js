var restaurant_url = "/restaurants";
var restaurant_array  = [];
restaurantCount = 0;
var restaurant_average_rating = "/restaurant_average_rating";
var restaurant_average_pricerating = "/restaurant_average_pricerating";

var review_url = "/reviews";
var review_array = [];
var currentIndex = 0;

var user_url = "/users";
var user_array = [];

var registerBtn = document.querySelector(".modal-btn-reg");
var modalBgReg = document.querySelector(".modal-bg-reg");
var modalCloseReg = document.querySelector(".modal-close-reg");

var loginBtn = document.querySelector(".login-link");

var backToReg = document.querySelector(".modal-b2r");
var modalBgLogin = document.querySelector(".modal-bg-login");
var modalCloseLogin = document.querySelector(".modal-close-login");

// register modal
registerBtn.addEventListener('click', function(){
    modalBgLogin.classList.remove('bg-active'); 
    modalBgReg.classList.add('bg-active');

});

modalCloseReg.addEventListener('click', function(){
    modalBgReg.classList.remove('bg-active');
    modalBgLogin.classList.remove('bg-active');
});

// login modal
loginBtn.addEventListener('click', function(){
    modalBgReg.classList.remove('bg-active');
    modalBgLogin.classList.add('bg-active');
});

modalCloseLogin.addEventListener('click', function(){
    modalBgReg.classList.remove('bg-active');
    modalBgLogin.classList.remove('bg-active');
});

backToReg.addEventListener('click', function(){
    modalBgLogin.classList.remove('bg-active'); 
    modalBgReg.classList.add('bg-active');

});