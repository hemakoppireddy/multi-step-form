import { render, screen, fireEvent } from "@testing-library/react";
import Step2Employment from "../forms/Step2Employment";
import { FormProvider } from "../state/FormContext";
import { BrowserRouter } from "react-router-dom";

function renderStep() {
  return render(
    <BrowserRouter>
      <FormProvider>
        <Step2Employment />
      </FormProvider>
    </BrowserRouter>
  );
}

describe("Conditional rendering", () => {
  test("shows company fields when employed is Yes", () => {
    renderStep();

    fireEvent.click(screen.getByLabelText("Yes"));

    expect(screen.getByLabelText("Company Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Job Title")).toBeInTheDocument();
  });

  test("hides company fields when employed is No", () => {
    renderStep();

    fireEvent.click(screen.getByLabelText("No"));

    expect(screen.queryByLabelText("Company Name")).toBeNull();
    expect(screen.queryByLabelText("Job Title")).toBeNull();
  });
});
