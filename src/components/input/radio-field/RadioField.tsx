import React from "react";
import { RadioContext } from "../radio-group/RadioGroup";

export interface RadioProps {
  id?: string;
  label?: string;
  value: any;
  disabled?: boolean;
  dataTestId?: string;
}

const RadioField: React.FC<RadioProps> = ({
  id,
  label,
  value,
  disabled,
  dataTestId,
}) => (
  <RadioContext.Consumer>
    {({ selectedValue, name, onChange }) => (
      <label className="block">
        <input
          type="radio"
          id={id}
          name={name}
          checked={selectedValue === value}
          disabled={disabled}
          data-testid={dataTestId}
          onChange={(ev) => onChange?.(ev, value)}
        />
        {label}
      </label>
    )}
  </RadioContext.Consumer>
);

export default RadioField;
