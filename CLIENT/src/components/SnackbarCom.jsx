import React from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarCom = ({ snackOpen, setSnackOpen, snackMessage }) => {
  return (
    <Snackbar
      open={snackOpen}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={6000}
      onClose={() => setSnackOpen(false)}
    >
      <Alert onClose={() => setSnackOpen(false)} severity="error" sx={{ width: "100%" }}>
        {snackMessage}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarCom;
