import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Thankyou = ({ formData, setFormData }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={4}
      minHeight={400}
      border="1px solid #ccc"
      borderRadius={4}
      boxShadow={1}
      backgroundColor="#f9f9f9"
    >
      <Typography variant="h5" component="h2" align="center" gutterBottom>
        Thank you for your booking!
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary">
        Your booking details:
      </Typography>
      <Box mt={2}>
        <Typography variant="body1" align="center" gutterBottom>
          Car Name: {formData.vehicleId.name}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Car Type: {formData.vehicleId.typeId.name}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          {formData.dateRange.startDate === formData.dateRange.endDate ? (
            <>
              Booking Date :{" "}
              {new Date(formData.dateRange.startDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </>
          ) : (
            <>
              Booking Date Range:{" "}
              {new Date(formData.dateRange.startDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}{" "}
              to{" "}
              {new Date(formData.dateRange.endDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </>
          )}
        </Typography>
        <Typography variant="body1" align="center">
          Reference Number: {formData._id}
        </Typography>
      </Box>
        <Button sx={{mt:3}} variant="contained" color="primary" onClick={()=>setFormData({})}>
          New Booking
        </Button>
    </Box>
  );
};

export default Thankyou;
