import { Link } from "react-router-dom";
import { useFormContext } from "../state/FormContext";
import { useEffect } from "react";

export default function ConfirmationPage() {
  const { resetForm } = useFormContext();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <main className="app-container">
      <div
        className="card success-card"
        role="status"
        aria-live="polite"
      >
        {/* Animated Checkmark */}
        <div className="checkmark-wrapper">
          <svg
            className="checkmark-svg"
            viewBox="0 0 52 52"
            aria-hidden="true"
          >
            <circle
              className="checkmark-circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark-check"
              fill="none"
              d="M14 27l7 7 17-17"
            />
          </svg>
        </div>

        <h2 className="success-title">
          Form Submitted Successfully
        </h2>

        <p className="success-text">
          Thank you for completing the registration.
          We’ve received your information and will get in touch soon.
        </p>

        <Link to="/" className="btn primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
