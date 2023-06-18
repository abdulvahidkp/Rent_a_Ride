const Router = require("express").Router();

const { bookAVehicle } = require("../controllers/booking.controllers");

//route for book a vehicle for rent
Router.route("/").post(bookAVehicle);

module.exports = Router;
