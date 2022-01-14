// call restaurants api and get all the restaurants
function getRestaurantData(){
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function(){
        restaurant_array = JSON.parse(request.responseText);
        //fetchReviews();
        console.log(restaurant_array)
        displayRestaurants();
    };
    request.send();
}

function displayRestaurants(){
    var table = document.getElementById("restaurantRows"); //add div id=restaurantRows later
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        var thumbnail = restaurant_array[count].thumb;
        var title = restaurant_array[count].restaurantName;
        //var row = 
        table.insertAdjacentHTML('beforeend', cell);
        restaurantCount++;
    }
    message = restaurantCount + "Restaurants";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

// //This function is to display the "Now Showing" movies
// function listNowShowingMovies() {
//     category = "Now Showing";
//     displayMovies(category);
//     document.getElementById("nowMenu").classList.add("active");
//     document.getElementById("comingMenu").classList.remove("active");
//     document.getElementById("aboutMenu").classList.remove("active");
// }
//


//I DONT NEED THIS



//
// //This function is to display the "Coming Soon" movies
// function listComingMovies() {
//     category = "Coming Soon";
//     displayMovies(category);
//     document.getElementById("nowMenu").classList.remove("active");
//     document.getElementById("comingMenu").classList.add("active");
//     document.getElementById("aboutMenu").classList.remove("active");
// }

//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantName").textContent = restaurant_array[item].title;
    document.getElementById("description").textContent = restaurant_array[item].description;
    document.getElementById("thumb").src = restaurant_array[item].thumb;
    document.getElementById("location").textContent = restaurant_array[item].location;
    document.getElementById("tags").textContent = restaurant_array[item].tags;
}