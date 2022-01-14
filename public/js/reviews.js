const req = require("express/lib/request");

function fetchReviews(){
    var request = new XMLHttpRequest();
    request.open('GET', review_url, true);
    request.onload = function(){
        review_array = JSON.parse(request.responseText);
        console.log(review_array);
    };
    request.send();
}

function showRestaurantReviews(element){
    document.getElementById("empty-review").innerHTML = 'No reviews.';
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].restaurantName;
    document.getElementById("review-body").textContent = "";

    for(var i = 0; i < restaurant_array.length; i++){
        if(review_array[i].restaurantId === restaurant_array[item]._id) {
            document.getElementById("empty-review").innerHTML = "";
            selectedRestaurantId = restaurant_array[item]._id;
            //var html =
            //document.getElementById("review-body").insertAdjacentHTML('beforeend', html);
            var rating = "";
            for (var j = 0; j < review_array[i].rating; j++){
                //console.log(i);
                rating += 1;
            }
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', rating);
        }
    }
}

function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
        var rating = 0;
        var price = 0;
        document.getElementById("user-reviews").value = "";
        document.getElementById("username").value = "";
}

// Submit or send the new review to the server to be added. CHANGEEEEEEEEEEEEEEEEEEE
function addReview() {
    var review = new Object();
    review.restaurantId = restaurant_array[currentIndex]._id; // Movie ID is required by server to create new comment 
    // review.movie = movie_array[currentIndex].title; // Movie title is required by server to create new comment
    review.username = document.getElementById("username").value; // Value from HTML input text
    review.review = document.getElementById("user-reviews").value; // Value from HTML input text
    review.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    review.rating = rating;
    review.price = price; //make price

    var postReview = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postReview.open("POST", comment_url, true); //Use the HTTP POST method to send data to server

    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function() {
        	console.log("new review sent");
	        fetchReviews(); // fetch all comments again so that the web page can have updated comments.     
    };
// Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(review)); 
}

function updateReview() {
    var response = confirm("Are you sure you want to update this review?");
    if (response == true) {
        var edit_review_url = review_url + "/" + review_array[currentIndex]._id;
        var updateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateReview.open("PUT", edit_review_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateReview.setRequestHeader("Content-Type", "application/json");
        review_array[currentIndex].username = document.getElementById("edit-username").value;
        review_array[currentIndex].review = document.getElementById("edit-user-reviews").value;
        review_array[currentIndex].rating = rating;
        review_array[currrentIndex].price = price;
        updateReview.onload = function() {
            fetchReviews();
        };
        updateReview.send(JSON.stringify(review_array[currentIndex]));
    }
}

function deleteReview(element){
    var response = confirm("Are you sure you want to delete this review?");
}