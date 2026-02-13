import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFormContext } from "../state/FormContext";

import Step1Personal from "./Step1Personal";
import Step2Employment from "./Step2Employment";
import Step3Preferences from "./Step3Preferences";

export default function MultiStepForm() {
  const { state } = useFormContext();
  const location = useLocation();
  const navigate = useNavigate();

  const stepFromUrl = location.pathname.includes("step-1")
    ? 1
    : location.pathname.includes("step-2")
    ? 2
    : 3;

  useEffect(() => {
    if (stepFromUrl !== state.currentStep) {
      navigate(`/form/step-${state.currentStep}`);
    }
  }, [stepFromUrl, state.currentStep, navigate]);

  return (
    <section className="app-container">
      {state.currentStep === 1 && <Step1Personal />}
      {state.currentStep === 2 && <Step2Employment />}
      {state.currentStep === 3 && <Step3Preferences />}
    </section>
  );
}
