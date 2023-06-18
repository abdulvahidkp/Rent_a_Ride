const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    brand: String,
    model: String,
    colour: String,
    year: Number,
    price: Number,
    available: {
      type:Boolean,
      default:true
    },
    typeId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "types",
    },
  },
  {
    timestamps: true,
  }
);

const Vehicles = mongoose.model("vehicles", schema);

module.exports = { Vehicles };
