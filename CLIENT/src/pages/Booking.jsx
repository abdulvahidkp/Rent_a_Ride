//libraries
import React, { useState } from "react";
import { Container } from "@mui/material";

//components
import StepperCom from "../components/StepperCom";
import Form from "../components/Form";
import Thankyou from "../components/Thankyou";

const Booking = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({});

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        // border: "1px solid #ccc",
        padding: "20px",
        // borderRadius: "4px",
        width: "500px",
        height: "525px",
      }}
    >
      {!formData.submitted ? (
        <>
          <StepperCom currentQuestion={currentQuestion} />
          <Form currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} setFormData={setFormData} />
        </>
      ) : (
        formData.submitted && <Thankyou formData={formData} setFormData={setFormData} />
      )}
    </Container>
  );
};

export default Booking;
