//libraries
const mongoose = require("mongoose");

//models
const { VehicleTypes } = require("../model/vehicle/vehicleTypes.model");
const { VehicleCategories } = require("../model/vehicle/vehicleCategories.model");
const { Vehicles } = require("../model/vehicle/vehicles.model");

//helpers
const { errorCatcher } = require("../helpers/errorCatcher");

const getVehicleTypes = errorCatcher(async (req, res) => {
  let vehicleTypes = await VehicleTypes.find();
  res.status(200).json(vehicleTypes);
});

const getVehicleCategories = errorCatcher(async (req, res) => {
  const { typeId } = req.params;
  //validating params is valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(typeId)) throw new Error("Please provide valid ObjectId as params");

  let vehicleCategories = await VehicleCategories.find({ typeId });
  res.status(200).json(vehicleCategories);
});

const getVehicles = errorCatcher(async (req, res) => {
  const { categoryId, typeId } = req.params;
  //validating params is valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(typeId) || !mongoose.Types.ObjectId.isValid(categoryId)) throw new Error("Please provide valid ObjectId as params");

  let vehicles = await Vehicles.find({ categoryId, typeId });
  res.status(200).json(vehicles);
});

module.exports = { getVehicleTypes, getVehicleCategories, getVehicles };
