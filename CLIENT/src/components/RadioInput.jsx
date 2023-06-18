import React from "react";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

const RadioInput = ({ title, currData, state, setState, formErrors, setFormErrors, label, field }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <RadioGroup
        name="wheels"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          setFormErrors({});
        }}
      >
        {currData.length > 0 &&
          currData.map((data) => (
            <FormControlLabel key={data._id} value={data._id} control={<Radio />} label={data[field]} />
          ))}
      </RadioGroup>
      {formErrors[label] && (
        <Typography variant="caption" style={{ color: "red", fontFamily: "sans-serif" }}>
          {formErrors[label]}
        </Typography>
      )}
    </div>
  );
};

export default RadioInput;
