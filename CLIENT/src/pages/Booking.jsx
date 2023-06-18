import React, { useState } from "react";
import { Container } from "@mui/material";

import StepperCom from "../components/StepperCom";
import Form from "../components/Form";

const Booking = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [confirmationData, setConfirmationData] = useState(true);
  
    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: confirmationData ? "center" : "normal",
          // border: "1px solid #ccc",
          padding: "20px",
          // borderRadius: "4px",
          width: "500px",
          height: "525px",
        }}
      >
        <StepperCom currentQuestion={currentQuestion} />
        <Form currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
      </Container>
    );
}

export default Booking