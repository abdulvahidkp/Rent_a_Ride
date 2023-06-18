const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { firstName: String, lastName: String },
  dateRange: { startDate: Date, endDate: Date },
  vehicleId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "vehicles",
  },
});

const Bookings = mongoose.model("bookings", schema);

module.exports = { Bookings };