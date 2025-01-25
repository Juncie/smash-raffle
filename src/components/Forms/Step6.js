import React from "react";
import { Box, Typography, FormControl, Select, MenuItem, TextField, Button } from "@mui/material";

const Step6 = ({ formik, styles }) => {
  return (
    <>
      <Box maxWidth={500} className="grid gap-4">
        <h2 className={styles.questionTitle}>Who Is Your Preferred Golf Apparel Brand?</h2>
        <FormControl fullWidth>
          <Select name="question5" value={formik.values.question5} onChange={formik.handleChange} onBlur={formik.handleBlur} displayEmpty>
            <MenuItem value="">Select a Brand</MenuItem>
            <MenuItem value="Bad Birdie">Bad Birdie</MenuItem>
            <MenuItem value="GoodGood">Good Good</MenuItem>
            <MenuItem value="Devereux">Devereux</MenuItem>
            <MenuItem value="Travis Mathew">Travis Mathew</MenuItem>
            <MenuItem value="Students Golf">Students Golf</MenuItem>
            <MenuItem value="Eastside Golf">Eastside Golf</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {formik.touched.question5 && formik.errors.question5 && (
            <Typography color="error" variant="caption">
              {formik.errors.question5}
            </Typography>
          )}
        </FormControl>

        {formik.values.question5 === "other" && (
          <TextField
            fullWidth
            name="otherQuestion5"
            placeholder="Please specify"
            value={formik.values.otherQuestion5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otherQuestion5 && Boolean(formik.errors.otherQuestion5)}
            helperText={formik.touched.otherQuestion5 && formik.errors.otherQuestion5}
            label="Other Brand"
            margin="normal"
          />
        )}
      </Box>
    </>
  );
};

export default Step6;
