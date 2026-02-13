import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormProvider } from "./state/FormContext";

import HomePage from "./routes/HomePage";
import FormPage from "./routes/FormPage";
import ConfirmationPage from "./routes/ConfirmationPage";
import NotFoundPage from "./routes/NotFoundPage";

export default function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form/*" element={<FormPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}
