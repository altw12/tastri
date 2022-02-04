// get all the restaurant data and store in array
function getRestaurantData(){
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    request.onload = function(){
        restaurant_array = JSON.parse(request.responseText);
        console.log(restaurant_array)
        fetchReviews();
        fetchUsers();
        getRestaurantAverageRating();
        getRestaurantAveragePriceRating();
        displayRestaurants();
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
	    var cell = '<div class="card" style="max-width: 250px;margin:3px">\
                        <img class="" style="object-fit:cover;max-width:250px;min-height:200px;max-height:200px" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-img-overlay" id="imaage">\
                            <h5 style="text-align:center;cursor:pointer;" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count + '" onClick="showRestaurantDetails(this)">' + title + '</h5>\
                            \
                            <p class="card-text text-center" style="cursor:pointer;" data-toggle="modal" data-target="#reviewModal" item="' + count + '" onClick="showRestaurantReviews(this)">Reviews</p>\
                        </div>\
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
    getRestaurantAverageRating();
    getRestaurantAveragePriceRating();
    if(rating_array[item].averageRating!=null){
        document.getElementById("rating-display").textContent = "Average Rating: " + rating_array[item].averageRating;
    }
    else{
        document.getElementById("rating-display").textContent = "No ratings yet."
    }
    if(rating_array[item].averageRating!=null){
        document.getElementById("price-display").textContent = "Average Price: " + price_array[item].averagePrice;
    }
    else{
        document.getElementById("price-display").textContent = "No price ratings yet."
    }
}
