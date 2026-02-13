import { renderHook, act } from "@testing-library/react";
import { FormProvider, useFormContext } from "../state/FormContext";

describe("FormContext state management", () => {
  const wrapper = ({ children }) => (
    <FormProvider>{children}</FormProvider>
  );

  test("updates form field", () => {
    const { result } = renderHook(() => useFormContext(), { wrapper });

    act(() => {
      result.current.updateField("firstName", "Hema");
    });

    expect(result.current.state.data.firstName).toBe("Hema");
  });

  test("resets form state", () => {
    const { result } = renderHook(() => useFormContext(), { wrapper });

    act(() => {
      result.current.updateField("email", "test@mail.com");
      result.current.resetForm();
    });

    expect(result.current.state.data.email).toBe("");
    expect(result.current.state.currentStep).toBe(1);
  });
});
