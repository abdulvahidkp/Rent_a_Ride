import React from "react";
import { Step, StepLabel, Stepper } from "@mui/material";

let stepLabels = ["Name", "Wheel", "Type", "Vehicle", "Date"];

const StepperCom = () => {
  return (
    <Stepper activeStep={currentQuestion} style={{ marginBottom: "20px" }}>
      {stepLabels.map((value, index) => (
        <Step key={index}>
          <StepLabel>{value}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default StepperCom;