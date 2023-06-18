//libraries
const mongoose = require("mongoose");

//models
const { Wheels } = require("../model/vehicle/wheels.model");
const { Types } = require("../model/vehicle/types.model");
const { Vehicles } = require("../model/vehicle/vehicles.model");

//helpers
const { errorCatcher } = require("../helpers/errorCatcher");

const getWheels = errorCatcher(async (req, res) => {
  let wheels = await Wheels.find();
  res.status(200).json(wheels);
});

const getTypes = errorCatcher(async (req, res) => {
  const { wheelId } = req.params;
  //validating params is valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(wheelId)) throw new Error("Please provide valid ObjectId as params");

  let types = await Types.find({ wheelId });
  res.status(200).json(types);
});

const getVehicles = errorCatcher(async (req, res) => {
  const { typeId } = req.params;
  
  //validating params is valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(typeId))
    throw new Error("Please provide valid ObjectId as params");

  let vehicles = await Vehicles.find({ typeId });
  res.status(200).json(vehicles);
});

module.exports = { getWheels, getTypes, getVehicles };
