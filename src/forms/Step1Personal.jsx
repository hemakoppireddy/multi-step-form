import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../state/FormContext";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

export default function Step1Personal() {
  const navigate = useNavigate();
  const { state, updateField, nextStep } = useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: state.data.firstName,
      lastName: state.data.lastName,
      email: state.data.email,
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    updateField("firstName", data.firstName);
    updateField("lastName", data.lastName);
    updateField("email", data.email);

    nextStep();
    navigate("/form/step-2");
  };

  return (
    <div className="card">
      <ProgressBar currentStep={1} />

      <div className="form-header">
        <h2>Personal Information</h2>
        <p className="muted-text">
          Tell us a little about yourself.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputField
          id="firstName"
          label="First Name"
          type="text"
          {...register("firstName", {
            required: "First name is required",
            minLength: {
              value: 2,
              message: "Minimum 2 characters required",
            },
            maxLength: {
              value: 50,
              message: "Maximum 50 characters allowed",
            },
          })}
          error={errors.firstName?.message}
        />

        <InputField
          id="lastName"
          label="Last Name"
          type="text"
          {...register("lastName", {
            required: "Last name is required",
            minLength: {
              value: 2,
              message: "Minimum 2 characters required",
            },
            maxLength: {
              value: 50,
              message: "Maximum 50 characters allowed",
            },
          })}
          error={errors.lastName?.message}
        />

        <InputField
          id="email"
          label="Email Address"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          error={errors.email?.message}
        />

        <div className="form-actions">
          <span /> {/* empty placeholder for alignment */}
          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
}
