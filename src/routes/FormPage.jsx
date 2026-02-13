import { Routes, Route, Navigate } from "react-router-dom";
import MultiStepForm from "../forms/MultiStepForm";

export default function FormPage() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="step-1" />} />
      <Route path="step-1" element={<MultiStepForm />} />
      <Route path="step-2" element={<MultiStepForm />} />
      <Route path="step-3" element={<MultiStepForm />} />
    </Routes>
  );
}
