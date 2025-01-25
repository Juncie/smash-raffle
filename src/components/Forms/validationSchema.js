import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = [
  yup.object({
    first: yup
      .string()
      .required("Required")
      .min(2, "First Name must be at least 2 characters")
      .max(20, "First Name must be at most 20 characters"),
    last: yup
      .string()
      .required("Required")
      .min(2, "Last Name must be at least 2 characters")
      .max(20, "Last Name must be at most 20 characters"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(/@[^.]*\./),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Required").min(10, "Phone number is not valid"),
  }),
  yup.object({
    question1: yup.string().required("Required"),
  }),
  yup.object({
    question2: yup.string().required("Required"),
  }),
  yup.object({
    question3: yup.string().required("Required"),
    otherQuestion3: yup.string().when("question3", {
      is: "other",
      then: () => yup.string().required("Please specify"),
      otherwise: () => yup.string().notRequired(),
    }),
  }),
  yup.object({
    question4: yup.string().required("Required"),
    otherQuestion4: yup.string().when("question4", {
      is: "other",
      then: () => yup.string().required("Please specify"),
      otherwise: () => yup.string().notRequired(),
    }),
  }),
  yup.object({
    question5: yup.string().required("Required"),
    otherQuestion5: yup.string().when("question5", {
      is: "other",
      then: () => yup.string().required("Please specify"),
      otherwise: () => yup.string().notRequired(),
    }),
  }),
];
