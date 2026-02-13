import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { submitForm } from "../services/api";

import { useFormContext } from "../state/FormContext";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

export default function Step3Preferences() {
  const navigate = useNavigate();
  const { state, updateField, prevStep } = useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newsletterSubscription: state.data.newsletterSubscription,
      preferredContactMethod: state.data.preferredContactMethod,
    },
    mode: "onBlur",
  });

 const onSubmit = async (data) => {
  updateField("newsletterSubscription", data.newsletterSubscription);
  updateField("preferredContactMethod", data.preferredContactMethod);

  await submitForm({
    ...state.data,
    ...data,
  });

  navigate("/confirmation");
};

  return (
    <div className="card">
      <ProgressBar currentStep={3} />

      <div className="form-header">
        <h2>Preferences</h2>
        <p className="muted-text">Help us tailor the experience for you.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Checkbox */}
        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input type="checkbox" {...register("newsletterSubscription")} />
            <span>Subscribe to our newsletter</span>
          </label>
        </div>

        {/* Select Dropdown */}
        <div className="form-group">
          <label htmlFor="preferredContactMethod">
            Preferred Contact Method
          </label>

          <select
            id="preferredContactMethod"
            {...register("preferredContactMethod", {
              required: "Please select a contact method",
            })}
            aria-describedby={
              errors.preferredContactMethod ? "contact-error" : undefined
            }
          >
            <option value="">Select an option</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="SMS">SMS</option>
          </select>

          {errors.preferredContactMethod && (
            <div id="contact-error" className="error-text" role="alert">
              {errors.preferredContactMethod.message}
            </div>
          )}
        </div>

        <div className="form-actions">
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              prevStep();
              navigate("/form/step-2");
            }}
          >
            Back
          </Button>

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
