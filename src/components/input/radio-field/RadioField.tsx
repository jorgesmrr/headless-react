import React from "react";
import { RadioContext } from "../radio-group/RadioGroup";

export interface RadioProps {
  id?: string;
  label?: string;
  value: any;
  disabled?: boolean;
}

class RadioField extends React.Component<RadioProps> {
  render() {
    return (
      <RadioContext.Consumer>
        {({ selectedValue, name, onChange }) => (
          <label className="block">
            <input
              type="radio"
              id={this.props.id}
              name={name}
              checked={selectedValue === this.props.value}
              disabled={this.props.disabled}
              onChange={(ev) => onChange?.(ev, this.props.value)}
            />
            {this.props.label}
          </label>
        )}
      </RadioContext.Consumer>
    );
  }
}

export default RadioField;
