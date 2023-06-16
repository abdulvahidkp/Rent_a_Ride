//models
const { VehicleTypes } = require("../model/vehicle/vehicleTypes.model");
const { VehicleCategories } = require("../model/vehicle/vehicleCategories.model");
const { Vehicles } = require("../model/vehicle/vehicles.model");

const addDefaultVehicleAndVehicleTypes = async () => {
  try {
    const vehicleTypes = [{ name: "Car" }, { name: "Bike" }];
    const vehicleCategories = [
      { name: "Hatchback", typeId: "Car" },
      { name: "Sedan", typeId: "Car" },
      { name: "SUV", typeId: "Car" },
      { name: "Sports", typeId: "Bike" },
    ];

    const vehicles = [
      {
        name: "Swift",
        brand: "Maruthi Suzuki",
        model: "zxi",
        colour: "white",
        year: 2019,
        price: 1100,
        available: true,
        typeId: "Car",
        categoryId: "Hatchback",
      },
      {
        name: "Altroz",
        brand: "Maruthi Suzuki",
        model: "xe",
        colour: "white",
        year: 2019,
        price: 1200,
        available: true,
        typeId: "Car",
        categoryId: "Hatchback",
      },
      {
        name: "i20",
        brand: "Hyundai",
        model: "asta",
        colour: "white",
        year: 2021,
        price: 1200,
        available: true,
        typeId: "Car",
        categoryId: "Hatchback",
      },
      {
        name: "Verna",
        brand: "Hyundai",
        model: "ex",
        colour: "black",
        year: 2019,
        price: 1300,
        available: true,
        typeId: "Car",
        categoryId: "Sedan",
      },
      {
        name: "City",
        brand: "Honda",
        model: "ex",
        colour: "grey",
        year: 2017,
        price: 1300,
        available: true,
        typeId: "Car",
        categoryId: "Sedan",
      },
      {
        name: "Ciaz",
        brand: "Maruthi Suzuki",
        model: "zeta",
        colour: "white",
        year: 2022,
        price: 1500,
        available: true,
        typeId: "Car",
        categoryId: "Sedan",
      },
      {
        name: "Brezza",
        brand: "Maruthi Suzuki",
        model: "vxi",
        colour: "white",
        year: 2022,
        price: 1400,
        available: true,
        typeId: "Car",
        categoryId: "SUV",
      },
      {
        name: "Creta",
        brand: "Hyundai",
        model: "zeta",
        colour: "white",
        year: 2022,
        price: 1500,
        available: true,
        typeId: "Car",
        categoryId: "SUV",
      },
      {
        name: "Compass",
        brand: "Jeep",
        model: "Model S",
        colour: "black",
        year: 2022,
        price: 1800,
        available: true,
        typeId: "Car",
        categoryId: "SUV",
      },
      {
        name: "R15",
        brand: "Yamaha",
        model: "v4",
        colour: "blue",
        year: 2020,
        price: 900,
        available: true,
        typeId: "Bike",
        categoryId: "Sports",
      },
      {
        name: "Duke",
        brand: "KTM",
        model: "250",
        colour: "orange",
        year: 2021,
        price: 1000,
        available: true,
        typeId: "Bike",
        categoryId: "Sports",
      },
    ];

    const vehicleTypesCount = await VehicleTypes.countDocuments();

    //when the app is running for the first time it will check the DB if any default data added to it. If it's not then it will add default to DB.
    if (!vehicleTypesCount) {
      let savedVehicleTypes = await VehicleTypes.insertMany(vehicleTypes);
      vehicleCategories.forEach((category) => {
        //find vehicle type Object_id and replace vehicle type name with it's Object_id
        let vehicleType = savedVehicleTypes.find((SavedvehicleType) => SavedvehicleType.name === category.typeId);
        category.typeId = vehicleType._id;
      });

      let savedVehicleCategories = await VehicleCategories.insertMany(vehicleCategories);
      vehicles.forEach((vehicle) => {
        let savedVehicleCategory = savedVehicleCategories.find((savedVehicleCategory) => {
          return savedVehicleCategory.name === vehicle.categoryId;
        });
        vehicle.categoryId = savedVehicleCategory._id;
        vehicle.typeId = savedVehicleCategory.typeId;
      });
      await Vehicles.insertMany(vehicles);
    }
  } catch (error) {
    console.log("error occured while saving default vehcles and vehicle types", error.message);
  }
};

module.exports = { addDefaultVehicleAndVehicleTypes };
