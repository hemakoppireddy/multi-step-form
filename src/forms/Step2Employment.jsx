import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useFormContext } from "../state/FormContext";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

export default function Step2Employment() {
  const navigate = useNavigate();
  const { state, updateField, nextStep, prevStep } = useFormContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      isEmployed: state.data.isEmployed,
      companyName: state.data.companyName,
      jobTitle: state.data.jobTitle,
    },
    mode: "onBlur",
  });

  const isEmployed = watch("isEmployed");

  // Clear conditional fields when "No" is selected
  useEffect(() => {
    if (isEmployed === "No") {
      setValue("companyName", "");
      setValue("jobTitle", "");
      updateField("companyName", "");
      updateField("jobTitle", "");
    }
  }, [isEmployed, setValue, updateField]);

  const onSubmit = (data) => {
    updateField("isEmployed", data.isEmployed);
    updateField("companyName", data.companyName || "");
    updateField("jobTitle", data.jobTitle || "");

    nextStep();
    navigate("/form/step-3");
  };

  return (
    <div className="card">
      <ProgressBar currentStep={2} />

      <div className="form-header">
        <h2>Employment Status</h2>
        <p className="muted-text">Tell us about your current work situation.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Radio Group */}
        <div className="form-group">
          <label id="employment-label" className="group-label">
            Are you currently employed?
          </label>

          <div
            className="radio-group"
            role="radiogroup"
            aria-labelledby="employment-label"
          >
            <label className="radio-option">
              <input
                type="radio"
                value="Yes"
                {...register("isEmployed", {
                  required: "Please select an option",
                })}
              />
              <span>Yes</span>
            </label>

            <label className="radio-option">
              <input
                type="radio"
                value="No"
                {...register("isEmployed", {
                  required: "Please select an option",
                })}
              />
              <span>No</span>
            </label>
          </div>

          {errors.isEmployed && (
            <div className="error-text" role="alert">
              {errors.isEmployed.message}
            </div>
          )}
        </div>

        {/* Conditional Fields */}
        {isEmployed === "Yes" && (
          <>
            <InputField
              id="companyName"
              label="Company Name"
              type="text"
              {...register("companyName", {
                required: "Company name is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 characters required",
                },
                maxLength: {
                  value: 100,
                  message: "Maximum 100 characters allowed",
                },
              })}
              error={errors.companyName?.message}
            />

            <InputField
              id="jobTitle"
              label="Job Title"
              type="text"
              {...register("jobTitle", {
                required: "Job title is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 characters required",
                },
                maxLength: {
                  value: 100,
                  message: "Maximum 100 characters allowed",
                },
              })}
              error={errors.jobTitle?.message}
            />
          </>
        )}

        <div className="form-actions">
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              prevStep();
              navigate("/form/step-1");
            }}
          >
            Back
          </Button>

          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
}
