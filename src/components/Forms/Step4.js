import React from "react";
import { Box, Typography, FormControl, Select, MenuItem, TextField, Button } from "@mui/material";

const Step4 = ({ formik, styles }) => {
  return (
    <>
      <Box maxWidth={500} className="grid gap-4">
        <h2 className={styles.questionTitle}>How would you describe your golf style?</h2>
        <FormControl fullWidth>
          <Select name="question3" value={formik.values.question3} onChange={formik.handleChange} onBlur={formik.handleBlur} displayEmpty>
            <MenuItem value="">Select an Option</MenuItem>
            <MenuItem value="Traditional">Traditional Golfer</MenuItem>
            <MenuItem value="Chill/Loose Fit">Chill/Loose Fit</MenuItem>
            <MenuItem value="Athleisure">Athleisure</MenuItem>
            <MenuItem value="Loud/Bright">Loud/Bright</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {formik.touched.question3 && formik.errors.question3 && (
            <Typography color="error" variant="caption">
              {formik.errors.question3}
            </Typography>
          )}
        </FormControl>

        {formik.values.question3 === "other" && (
          <TextField
            fullWidth
            name="otherQuestion3"
            label="Please Specify"
            value={formik.values.otherQuestion3}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otherQuestion3 && Boolean(formik.errors.otherQuestion3)}
            helperText={formik.touched.otherQuestion3 && formik.errors.otherQuestion3}
          />
        )}
      </Box>
    </>
  );
};

export default Step4;
