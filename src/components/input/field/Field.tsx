import React from "react";

export interface FieldProps {
  for?: string;
  label?: string;
  hint?: string;
  error?: string;
}

const Field: React.FC<FieldProps> = ({
  for: htmlFor,
  label,
  hint,
  error,
  children,
}) => (
  <div className="field">
    {label && (
      <label htmlFor={htmlFor}>
        {label}

        {hint && <br />}

        {hint && <small className="field-hint">{hint}</small>}
      </label>
    )}

    {children}

    {error && <small className="field-error">{error}</small>}
  </div>
);

export default Field;
