import React from "react";

interface RadioProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => any;
}

class RadioField extends React.Component<RadioProps> {
  render() {
    return (
      <label className="block">
        <input
          type="radio"
          id={this.props.id}
          name={this.props.name}
          checked={this.props.checked}
          disabled={this.props.disabled}
          value={this.props.value}
          onChange={(ev) => this.props.onChange?.(ev)}
        />
        {this.props.label}
      </label>
    );
  }
}

export default RadioField;
