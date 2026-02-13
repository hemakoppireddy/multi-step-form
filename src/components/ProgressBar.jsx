export default function ProgressBar({ currentStep }) {
  return (
    <div className="progress-container" aria-label="Form progress">
      <div className="stepper">
        {[1, 2, 3].map((step, index) => (
          <div className="stepper-item" key={step}>
            <div
              className={`step-circle ${currentStep >= step ? "active" : ""}`}
              aria-current={currentStep === step ? "step" : undefined}
            >
              {step}
            </div>

            {index < 2 && (
              <div
                className={`step-line ${currentStep > step ? "active" : ""}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
