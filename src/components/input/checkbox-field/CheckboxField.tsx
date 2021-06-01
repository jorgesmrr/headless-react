import React from "react";

export interface CheckboxProps {
  id?: string;
  name?: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  dataTestId?: string;
  onChange?: Function;
}

const CheckboxField: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  checked,
  disabled,
  dataTestId,
  onChange,
}) => (
  <label className="block">
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      disabled={disabled}
      data-testid={dataTestId}
      onChange={(ev) => onChange?.(ev)}
    />
    {label}
  </label>
);

export default CheckboxField;
