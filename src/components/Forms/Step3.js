import React from "react";
import { Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";

const Step3 = ({ formik, styles }) => {
  return (
    <>
      <Box maxWidth={500} className="grid gap-4">
        <h2 className={styles.questionTitle}>What do you usually spend on Golf Shirts?</h2>
        <FormControl component="fieldset">
          <FormLabel>Price Range</FormLabel>
          <RadioGroup row name="question2" value={formik.values.question2} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <FormControlLabel value="$0-$25" control={<Radio />} label="$0-$25" />
            <FormControlLabel value="$25-$50" control={<Radio />} label="$25-$50" />
            <FormControlLabel value="$50-$75" control={<Radio />} label="$50-$75" />
            <FormControlLabel value="$75-$100" control={<Radio />} label="$75-$100" />
          </RadioGroup>
          {formik.touched.question2 && formik.errors.question2 && (
            <Typography color="error" variant="caption">
              {formik.errors.question2}
            </Typography>
          )}
        </FormControl>
      </Box>
    </>
  );
};

export default Step3;
