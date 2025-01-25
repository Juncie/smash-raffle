import React from "react";
import { TextField, Box, FormControlLabel, Checkbox } from "@mui/material";

const Step1 = ({ formik, styles }) => {
  return (
    <>
      <Box className="grid gap-4">
        <h2 className={styles.questionTitle}>Sign Up Today For Free!</h2>
        <TextField
          fullWidth
          name="first"
          label="First Name"
          value={formik.values.first}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.first && Boolean(formik.errors.first)}
          helperText={formik.touched.first && formik.errors.first}
        />
        <TextField
          fullWidth
          name="last"
          label="Last Name"
          value={formik.values.last}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.last && Boolean(formik.errors.last)}
          helperText={formik.touched.last && formik.errors.last}
        />
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          name="phone"
          label="Phone Number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        {/* <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I would like to receive email updates"
          name="optIn"
          onChange={formik.setFieldValue("optIn", !formikoptIn)}
        /> */}
      </Box>
    </>
  );
};

export default Step1;
