function getRestaurantAveragePriceRating(){
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_average_pricerating_url, true);
    request.onload = function(){
        price_array = JSON.parse(request.responseText);
    };
    request.send();
}