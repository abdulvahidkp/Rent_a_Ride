const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    wheelId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "wheels",
    },
  },
  {
    timestamps: true,
  }
);

const Types = mongoose.model("types", schema);

module.exports = { Types };
