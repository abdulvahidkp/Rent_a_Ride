const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    typeId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "vehicleTypes",
    },
  },
  {
    timestamps: true,
  }
);

const VehicleCategories = mongoose.model("vehicleCategories", schema);

module.exports = { VehicleCategories };
