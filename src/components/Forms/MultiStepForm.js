"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Paper, Button, Stepper, Step, StepLabel, CircularProgress } from "@mui/material";
import { db } from "../../lib/Firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { validationSchema } from "./validationSchema";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import { toast } from "sonner";
import { sendToZapier } from "@/lib/webhooks/Zapier";
import sponsorLogo from "@/assets/images/logos/sponsors/badbirdie-isgp2.png";
import Image from "next/image";

import styles from "./styles.module.scss";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      first: "",
      last: "",
      email: "",
      phone: "",
      question1: "",
      question2: "",
      question3: "",
      otherQuestion3: "",
      question4: "",
      otherQuestion4: "",
      question5: "",
      otherQuestion5: "",
      optIn: true,
    },
    validationSchema: validationSchema[step - 1],
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setLoading(true);

      setTimeout(async () => {
        const collectionRef = collection(db, "jan-submissions");
        try {
          await addDoc(collectionRef, {
            ...values,
            timestamp: serverTimestamp(),
          });

          sendToZapier(values);

          toast.success(`Thank you ${values.first}, you've been registered!`, {
            dismissible: true,
            duration: 8000,
          });
          formik.resetForm();
          setStep(1);
        } catch (error) {
          console.error("Error adding document: ", error);
          toast.error("An error occurred. Please try again later.");
        } finally {
          setLoading(false);
        }
      }, 1000); // Delay of 3000ms (3 seconds)
    },
  });

  const handleNext = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      setStep((prev) => prev + 1);
    } else {
      formik.setTouched(Object.keys(formik.values).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    }
  };

  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const steps = [
    <Step1 formik={formik} styles={styles} />,
    <Step2 formik={formik} styles={styles} />,
    <Step3 formik={formik} styles={styles} />,
    <Step4 formik={formik} styles={styles} />,
    <Step5 formik={formik} styles={styles} />,
    <Step6 formik={formik} styles={styles} />,
  ];

  return (
    <section className={styles.root}>
      <div className="max-w-48 py-10">
        <Image src={sponsorLogo} alt="Bad Birdie x Inrange Smash Golf Play" />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>We're Giving Away $1000 In Prizes</span>
          <hgroup className="text-center lg:text-left pb-2">
            <h1 className="text-white ">Register For The Smash Raffle!</h1>
            <p className="text-white/90">Sign Up to be entered for a chance to win up to $1000 in great prizes!</p>
          </hgroup>
          <Button variant="outlined" color="white" href="#prizes">
            Learn More
          </Button>
        </div>

        <Paper className="rounded">
          <div class="px-8 py-12 grid gap-4">
            <Stepper className="pt-4" activeStep={step - 1} alternativeLabel sx={{ mb: 4 }}>
              {Array.from({ length: 6 }).map((_, index) => (
                <Step key={index}>
                  <StepLabel />
                </Step>
              ))}
            </Stepper>
            {loading ? <CircularProgress /> : steps[step - 1]}
            <div className="flex gap-4">
              {step > 1 && (
                <Button variant="outlined" onClick={handlePrevious}>
                  Previous
                </Button>
              )}
              {step < 6 ? (
                <Button variant="contained" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button variant="contained" color="primary" type="submit" onClick={formik.handleSubmit}>
                  Submit
                </Button>
              )}
            </div>
          </div>
        </Paper>
      </div>
    </section>
  );
};

export default MultiStepForm;
