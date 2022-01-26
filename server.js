var express = require("express");

var restaurantController = require('./controllers/restaurantController');

var reviewController = require('./controllers/reviewController');

var userController = require('./controllers/userController');

var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/users').get(userController.getAllUsers) //works
app.route('/users').post(userController.addUser); //works
app.route('/users/:id').put(userController.updateUser); //works
app.route('/users/:id').delete(userController.deleteUser); //works
app.route('/login').post(userController.getLoginInfo); //works
app.route('/users/:id').get(userController.getAllUserReviews);  //works

app.route('/reviews').get(reviewController.getAllReviews); //works
app.route('/reviews').post(reviewController.addReview); //works
app.route('/reviews/:id').put(reviewController.updateReview); //works
app.route('/reviews/:id').delete(reviewController.deleteReview); //works
app.route('/reviews/:id').get(reviewController.getReviewInfo); //works

app.route('/restaurants').get(restaurantController.getAllRestaurants); //works
app.route('/restaurants/:id').get(restaurantController.getRestaurantReviews); //works
app.route('/restaurant_average_rating').get(restaurantController.getRestaurantAverageRating);
app.route('/restaurant_average_pricerating').get(restaurantController.getRestaurantAveragePriceRating);


app.listen(8000, "127.0.0.1");
console.log("Web server running @ http://127.0.0.1:8000");