export default function InputField({ label, id, error, ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} aria-describedby={error ? `${id}-error` : undefined} />
      {error && (
        <div id={`${id}-error`} className="error-text" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
