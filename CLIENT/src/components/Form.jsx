//libraries
import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { DateRange } from "react-date-range";

//components
import RadioInput from "./RadioInput";
import SnackbarCom from "./SnackbarCom";

//css files
import "react-date-range/dist/styles.css"; // date range main style file
import "react-date-range/dist/theme/default.css"; // date range theme css file

//helper
import axios from "./axios";

let snackMessage = "";

const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [wheel, setWheel] = useState("");
  const [type, setType] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [formErrors, setFormErrors] = useState({});
  const [currData, setCurrData] = useState([]);
  const [snackOpen, setSnackOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setFormErrors({ ...formErrors, [name]: "" });
    setName((prev) => ({ ...prev, [name]: value }));
  };

  const fetchData = async (api) => {
    setLoading(true);
    try {
      let { data } = await axios.get(api);
      setCurrData(data);
    } catch (error) {
      snackMessage = error.response?.data?.message || error.message;
      setSnackOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleNextQuestion = () => {
    if (loading) return;
    if (currentQuestion === 0) {
      if (name.firstName === "" || name.lastName === "") {
        let errMessage = "This field is required";
        let err =
          name.firstName === "" && name.lastName === ""
            ? { firstName: errMessage, lastName: errMessage }
            : name.firstName === ""
            ? { firstName: errMessage }
            : { lastName: errMessage };
        setFormErrors(err);
        return;
      }
      fetchData("/api/vehicle");
    }

    if (currentQuestion === 1) {
      if (wheel === "") return setFormErrors({ wheel: "Please select the number of wheels." });
      fetchData(`/api/vehicle/${wheel}`);
    }

    if (currentQuestion === 2) {
      if (type === "") return setFormErrors({ type: "Please select the type of vehicle." });
      fetchData(`/api/vehicle/type/${type}`);
    }

    if (currentQuestion === 3) {
      if (vehicleId === "") return setFormErrors({ vehicleId: "Please select a specific vehicle ." });
    }

    setFormErrors({});
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleSubmit = async () => {
    //handle submit logic
    return;
  };

  return (
    <>
      {currentQuestion === 0 && (
        <div>
          <Typography variant="h5" gutterBottom>
            First, What's your name?
          </Typography>
          <TextField
            label="First Name"
            name="firstName"
            value={name.firstName}
            onChange={handleNameChange}
            fullWidth
            margin="normal"
            error={Boolean(formErrors.firstName)}
            helperText={formErrors.firstName}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={name.lastName}
            onChange={handleNameChange}
            fullWidth
            margin="normal"
            error={Boolean(formErrors.lastName)}
            helperText={formErrors.lastName}
          />
        </div>
      )}
      {currentQuestion === 1 && (
        <RadioInput
          title={`Hi ${name.firstName}, How many wheels do you want?`}
          state={wheel}
          setState={setWheel}
          currData={currData}
          field={"wheel"}
          label={"wheel"}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
        />
      )}

      {currentQuestion === 2 && (
        <RadioInput
          title={`Which type of vehicle do you want?`}
          state={type}
          setState={setType}
          currData={currData}
          field={"name"}
          label={"type"}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
        />
      )}

      {currentQuestion === 3 && (
        <RadioInput
          title={`Which vehicle do you want?`}
          state={vehicleId}
          setState={setVehicleId}
          currData={currData}
          field={"name"}
          label={"vehicleId"}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
        />
      )}

      {currentQuestion === 4 && (
        <div>
          <Typography variant="h5" gutterBottom>
            Great choice! Choose a date.
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDateRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              minDate={new Date()}
            />
          </div>
        </div>
      )}
      {currentQuestion !== 4 ? (
        <Button
          fullWidth
          variant="contained"
          size="large"
          disabled={loading}
          color="primary"
          onClick={handleNextQuestion}
        >
          {loading ? "Loading.." : "Next"}
        </Button>
      ) : (
        <Button fullWidth variant="contained" size="large" disabled={loading} color="success" onClick={handleSubmit}>
          Book now
        </Button>
      )}
      {/* to show any error while fetch items from backend as like toast*/}
      <SnackbarCom snackOpen={snackOpen} setSnackOpen={setSnackOpen} snackMessage={snackMessage} />
    </>
  );
};

export default Form;
