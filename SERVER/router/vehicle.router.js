const { getVehicleTypes, getVehicleCategories, getVehicles } = require('../controllers/vehicle.controllers');

const Router = require('express').Router();

Router.route('/').get(getVehicleTypes)
Router.route('/:typeId').get(getVehicleCategories)
Router.route('/:typeId/:categoryId').get(getVehicles)

module.exports = Router