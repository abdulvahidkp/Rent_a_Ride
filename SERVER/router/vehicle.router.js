const Router = require('express').Router();

const { getWheels, getTypes, getVehicles } = require('../controllers/vehicle.controllers');

Router.route('/').get(getWheels)
Router.route('/:wheelId').get(getTypes)
Router.route('/type/:typeId').get(getVehicles)

module.exports = Router