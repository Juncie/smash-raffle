import React, { Suspense } from "react";
import GSAPWrapper from "@/wrappers/GSAPWrapper";
import MultiStepForm from "@/components/Forms/MultiStepForm";
import Navigation from "@/components/Navigation/Navigation";
import LandingCarousel from "./LandingCarousel/LandingCarousel";
import Partners from "./Partners/Partners";
import CurrentPrizes from "./CurrentPrizes/CurrentPrizes";
import HowItWorks from "./HowItWorks/HowItWorks";
import Footer from "./Footer/Footer";
import PaymentSuccessDialog from "@/components/Dialogs/PaymentSuccessDialog/PaymentSuccessDialog";

export default function Landing() {
  return (
    <GSAPWrapper>
      <div>
        <Suspense>
          <PaymentSuccessDialog />
        </Suspense>
        {/* <Navigation /> */}
        {/* <LandingCarousel /> */}
        <MultiStepForm />
        <Partners />
        <CurrentPrizes />
        <HowItWorks />
        <Footer />
      </div>
    </GSAPWrapper>
  );
}
