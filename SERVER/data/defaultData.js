//models
const { Wheels } = require("../model/vehicle/wheels.model");
const { Types } = require("../model/vehicle/types.model");
const { Vehicles } = require("../model/vehicle/vehicles.model");

const addDefaultDatas = async () => {
  try {
    const wheels = [{ wheel: 2 }, { wheel: 4 }];
    const types = [
      { name: "Hatchback", wheelId: 4 },
      { name: "Sedan", wheelId: 4 },
      { name: "SUV", wheelId: 4 },
      { name: "Sports", wheelId: 2 },
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
        typeId: "Hatchback",
      },
      {
        name: "Altroz",
        brand: "Maruthi Suzuki",
        model: "xe",
        colour: "white",
        year: 2019,
        price: 1200,
        available: true,
        typeId: "Hatchback",
      },
      {
        name: "i20",
        brand: "Hyundai",
        model: "asta",
        colour: "white",
        year: 2021,
        price: 1200,
        available: true,
        typeId: "Hatchback",
      },
      {
        name: "Verna",
        brand: "Hyundai",
        model: "ex",
        colour: "black",
        year: 2019,
        price: 1300,
        available: true,
        typeId: "Sedan",
      },
      {
        name: "City",
        brand: "Honda",
        model: "ex",
        colour: "grey",
        year: 2017,
        price: 1300,
        available: true,
        typeId: "Sedan",
      },
      {
        name: "Ciaz",
        brand: "Maruthi Suzuki",
        model: "zeta",
        colour: "white",
        year: 2022,
        price: 1500,
        available: true,
        typeId: "Sedan",
      },
      {
        name: "Brezza",
        brand: "Maruthi Suzuki",
        model: "vxi",
        colour: "white",
        year: 2022,
        price: 1400,
        available: true,
        typeId: "SUV",
      },
      {
        name: "Creta",
        brand: "Hyundai",
        model: "zeta",
        colour: "white",
        year: 2022,
        price: 1500,
        available: true,
        typeId: "SUV",
      },
      {
        name: "Compass",
        brand: "Jeep",
        model: "Model S",
        colour: "black",
        year: 2022,
        price: 1800,
        available: true,
        typeId: "SUV",
      },
      {
        name: "R15",
        brand: "Yamaha",
        model: "v4",
        colour: "blue",
        year: 2020,
        price: 900,
        available: true,
        typeId: "Sports",
      },
      {
        name: "Duke",
        brand: "KTM",
        model: "250",
        colour: "orange",
        year: 2021,
        price: 1000,
        available: true,
        typeId: "Sports",
      },
    ];

    const wheelsCount = await Wheels.countDocuments();

    //when the app is running for the first time it will check the DB if any default data added to it. If it's not then it will add default to DB.
    if (!wheelsCount) {
      let savedWheels = await Wheels.insertMany(wheels);
      types.forEach((type) => {
        //find vehicle type Object_id and replace vehicle type name with it's Object_id
        let wheelDoc = savedWheels.find((savedWheel) => savedWheel.wheel === type.wheelId);
        type.wheelId = wheelDoc._id;
      });

      let savedTypes = await Types.insertMany(types);
      vehicles.forEach((vehicle) => {
        let typeDoc = savedTypes.find((savedType) => {
          return savedType.name === vehicle.typeId;
        });
        vehicle.typeId = typeDoc._id;
      });
      await Vehicles.insertMany(vehicles);
    }
  } catch (error) {
    console.log("error occured while saving default vehcles and vehicle types", error.message);
  }
};

module.exports = { addDefaultDatas };
