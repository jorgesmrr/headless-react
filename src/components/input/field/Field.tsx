import React from "react";

export interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  dataTestId?: string;
}

const Field: React.FC<FieldProps> = ({
  label,
  hint,
  error,
  dataTestId,
  children,
}) => (
  <label className="field" data-testid={dataTestId}>
    <span>
      {label}

      {hint && <br />}

      {hint && <small className="field-hint">{hint}</small>}
    </span>

    {children}

    {error && <small className="field-error">{error}</small>}
  </label>
);

export default Field;
