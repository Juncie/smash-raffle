import React from "react";
import { Box, Typography, FormControl, Select, MenuItem, TextField, Button } from "@mui/material";

const Step5 = ({ formik, styles }) => {
  return (
    <>
      <Box maxWidth={500} className="grid gap-4">
        <h2 className={styles.questionTitle}>How do you like your golf shirts to fit?</h2>
        <FormControl fullWidth>
          <Select name="question4" value={formik.values.question4} onChange={formik.handleChange} onBlur={formik.handleBlur} displayEmpty>
            <MenuItem value="">Select an Option</MenuItem>
            <MenuItem value="boxy/crop">Boxy/crop</MenuItem>
            <MenuItem value="standard fit">Standard fit</MenuItem>
            <MenuItem value="slim fit">Slim Fit</MenuItem>
            <MenuItem value="oversized">Oversized</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {formik.touched.question4 && formik.errors.question4 && (
            <Typography color="error" variant="caption">
              {formik.errors.question4}
            </Typography>
          )}
        </FormControl>

        {formik.values.question4 === "other" && (
          <TextField
            fullWidth
            name="otherQuestion4"
            placeholder="Please specify"
            value={formik.values.otherQuestion4}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otherQuestion4 && Boolean(formik.errors.otherQuestion4)}
            helperText={formik.touched.otherQuestion4 && formik.errors.otherQuestion4}
            label="Other Fit"
            margin="normal"
          />
        )}
      </Box>
    </>
  );
};

export default Step5;
