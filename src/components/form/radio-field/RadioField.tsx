import React from "react";

interface RadioProps {
  id?: string;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

class CheckboxField extends React.Component<RadioProps> {
  render() {
    return (
      <label>
        <input
          type="radio"
          id={this.props.id}
          name={this.props.name}
          checked={this.props.checked}
          disabled={this.props.disabled}
          onChange={() => this.props.onChange?.()}
        />
        {this.props.label}
      </label>
    );
  }
}

export default CheckboxField;
