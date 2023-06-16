const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const VehicleTypes = mongoose.model("vehicleTypes", schema);

module.exports = { VehicleTypes };
