import { createContext, useContext, useReducer } from "react";

const FormContext = createContext();

const initialState = {
  currentStep: 1,
  data: {
    firstName: "",
    lastName: "",
    email: "",
    isEmployed: "",
    companyName: "",
    jobTitle: "",
    newsletterSubscription: false,
    preferredContactMethod: "",
  },
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

    case "PREV_STEP":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const updateField = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const nextStep = () => dispatch({ type: "NEXT_STEP" });
  const prevStep = () => dispatch({ type: "PREV_STEP" });
  const resetForm = () => dispatch({ type: "RESET_FORM" });

  return (
    <FormContext.Provider
      value={{
        state,
        updateField,
        nextStep,
        prevStep,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
