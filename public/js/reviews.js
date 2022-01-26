
//takes review data from database and stores it in an array
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
    document.getElementById("emptyReview").innerHTML = 'No reviews.'; //if empty-review is visible, show no reviews
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].restaurantName; //
    document.getElementById("reviewBody").textContent = "";
    console.log(review_array[0].restaurantId)
    for(var i = 0; i < review_array.length; i++){
        if(review_array[i].restaurantId === restaurant_array[item]._id) {
            document.getElementById("emptyReview").innerHTML = "";
            selectedRestaurantId = restaurant_array[item]._id;
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating">' + review_array[i].review + "</p>               \
                                    <small>by " + review_array[i].userId + " @ " + review_array[i].datePosted + "</small>\
                                    <p>Rating: " + review_array[i].rating +"</p><p>Price Rating: " + review_array[i].price + "</p>\
                                </div>" +
                            "</div>                                                                                              \
                        </div>";
            document.getElementById("reviewBody").insertAdjacentHTML('beforeend', html);
            var star = ""
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteReview(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editReviewModal' data-dismiss='modal' item='" + i + "' onClick='editReview(this)' ></i>";
            document.getElementById("rating").insertAdjacentHTML('beforebegin', star + "<br/>");
            //generate
        }
    }
}

function newReview() {
        var rating = 0;
        var price = 0;
        document.getElementById("user-reviews").value = "";
}


function addReview() {
    var review = new Object();
    review.restaurantId = restaurant_array[currentIndex]._id; // Restaurant ID is required by server to create new comment 
    // review.movie = restaurant_array[currentIndex].title; // Restaurant name is required by server to create new comment
    // review.userId = document.getElementById("username").value; // User Name from User ID
    review.review = document.getElementById("user-reviews").value; // Value from HTML input text
    review.datePosted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    review.rating = document.getElementById("rating-number").value;
    review.price = document.getElementById("price-number").value; //make price

    var postReview = new XMLHttpRequest(); // new HttpRequest instance to send review
    postReview.open("POST", review_url, true); //Use the HTTP POST method to send data to server
    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function() {
        	console.log("new review sent");
	        fetchReviews(); // fetch all reviews again so that the web page can have updated comments.     
    };
    // Convert the data in review object to JSON format before sending to the server.
    postReview.send(JSON.stringify(review));
}

function updateReview() {
    var response = confirm("Are you sure you want to update this review?");
    if (response == true) {
        var edit_review_url = review_url + "/" + review_array[currentIndex]._id;
        var updateReview = new XMLHttpRequest(); // new HttpRequest instance to send request to server
        updateReview.open("PUT", edit_review_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updateReview.setRequestHeader("Content-Type", "application/json");
        // review_array[currentIndex].username = document.getElementById("edit-username").value; //userId
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
    if (response == true) {
        var item = element.getAttribute("item"); //get the current item
        var delete_review_url = review_url + "/" + review_array[item]._id;
        var eraseReview = new XMLHttpRequest();
        eraseReview.open("DELETE", delete_review_url, true);
        eraseReview.onload = function() {
            fetchReviews();
        };
        eraseReview.send();
    }
}

function editReview(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    //document.getElementById("editnickname").value = review_array[item].username;
    document.getElementById("edit-user-review").value = review_array[item].review;
    document.getElementById("edit-rating-number").value = review_array[item].rating;
    document.getElementById("edit-price-number").value = review_array[item].price;
}
