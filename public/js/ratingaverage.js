function getRestaurantAverageRating(){
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_average_rating_url, true);
    request.onload = function(){
        rating_array = JSON.parse(request.responseText);
    };
    request.send();
}