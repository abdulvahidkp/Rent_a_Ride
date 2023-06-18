const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    wheel: Number,
  },
  {
    timestamps: true,
  }
);

const Wheels = mongoose.model("wheels", schema);

module.exports = { Wheels };