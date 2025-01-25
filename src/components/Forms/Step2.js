import React from "react";
import { Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";

const Step2 = ({ formik, styles }) => {
  return (
    <>
      <Box maxWidth={500} className="grid gap-4">
        <h2 className={styles.questionTitle}>What is the most important factor when choosing your clothing?</h2>
        <FormControl component="fieldset">
          <FormLabel>Choose one:</FormLabel>
          <RadioGroup row name="question1" value={formik.values.question1} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <FormControlLabel value="style" control={<Radio />} label="Style" />
            <FormControlLabel value="price" control={<Radio />} label="Price" />
            <FormControlLabel value="fit" control={<Radio />} label="Fit" />
            <FormControlLabel value="brand" control={<Radio />} label="Brand Recognition" />
          </RadioGroup>
          {formik.touched.question1 && formik.errors.question1 && (
            <Typography color="error" variant="caption">
              {formik.errors.question1}
            </Typography>
          )}
        </FormControl>
      </Box>
    </>
  );
};

export default Step2;
