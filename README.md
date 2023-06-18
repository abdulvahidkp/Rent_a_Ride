# Rent a Ride - Vehicle Rental Application

This is a full-stack application built using ReactJS, Node.js, Express.js, MongoDB, and Material-UI. The application is called "Rent a Ride" and is designed for booking vehicles for rent. It provides multiple categories of vehicles for users to choose from.

## Features

- User Registration: Users can register by providing their first name, last name, and other required information.
- Vehicle Selection: Users can select the number of wheels they require for their rental and choose from different vehicle categories such as hatchback, sedan, SUV, etc.
- Model Selection: Users can select a specific model from the chosen vehicle category, such as Swift, Baleno, etc.
- Date Range Selection: Users can choose a date range for their rental period.
- Booking Confirmation: After selecting the vehicle, model, and date range, users can confirm their booking. They will receive a confirmation screen with their booking details.
- Validation: The application performs validation both on the frontend and backend using Joi to ensure that the provided data is accurate and complete.

## Project Structure

The project is organized into two folders: `SERVER` and `CLIENT`.

### Server

The server folder contains the backend code. To run the server, follow these steps:

1. Clone the repository: `git clone https://github.com/abdulvahidkp/Rent_a_Ride.git`
2. Navigate to the project directory: `cd Rent_a_Ride/SERVER`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. The backend will run on `http://localhost:3000`

### Client

The client folder contains the frontend code. To run the client, follow these steps:

1. Navigate to the project directory: `cd Rent_a_Ride/CLIENT`
2. Install dependencies: `npm install`
3. Start the client: `npm run dev`
4. The frontend will run on `http://localhost:5173`

Please ensure that both the server and client are running simultaneously for the application to work properly.

## Technologies Used

- ReactJS
- Node.js
- Express.js
- MongoDB
- Material-UI
- Joi (for validation)

## Conclusion

"Rent a Ride" is a comprehensive vehicle rental application that allows users to book vehicles based on their preferences. With its intuitive user interface and validation mechanisms, it provides a seamless booking experience. To run the application, follow the steps mentioned above, and feel free to explore and contribute to the project.