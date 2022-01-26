// get all the restaurant data and store in array
function getRestaurantData(){
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function(){
        restaurant_array = JSON.parse(request.responseText);
        console.log(restaurant_array)
        fetchReviews();
        displayRestaurants();
    };
    request.send();
}
function getRestaurantAverageRating(){
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_average_rating_url, true);
    request.onload = function(){
        rating_array = JSON.parse(request.responseText);
    };
    request.send();
}

function getRestaurantAveragePriceRating(){
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_average_pricerating_url, true);
    request.onload = function(){
        pricerating_array = JSON.parse(request.responseText);
    };
    request.send();
}

function displayRestaurants() {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        var thumbnail = restaurant_array[count].thumb;
        var title = restaurant_array[count].restaurantName;
	    var cell = '<div class="card col-md-3" ><img class="card-img-top" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' + count + '" onClick="showRestaurantReviews(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count + '" onClick="showRestaurantDetails(this)">' + title + '</h5></div>\
</div>'
        table.insertAdjacentHTML('beforeend', cell);    
        document.getElementById("parent").textContent="";
        restaurantCount++;
    }
}



function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantTitle").textContent = restaurant_array[item].restaurantName;
    document.getElementById("description").textContent = restaurant_array[item].description;
    document.getElementById("thumb").src = restaurant_array[item].thumb;
    document.getElementById("location").textContent = restaurant_array[item].location;
    document.getElementById("tags").textContent = restaurant_array[item].tags;
}
