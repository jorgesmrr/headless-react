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

class CheckboxField extends React.Component<CheckboxProps> {
  render() {
    return (
      <label className="block">
        <input
          type="checkbox"
          id={this.props.id}
          name={this.props.name}
          checked={this.props.checked}
          disabled={this.props.disabled}
          data-testid={this.props.dataTestId}
          onChange={(ev) => this.props.onChange?.(ev)}
        />
        {this.props.label}
      </label>
    );
  }
}

export default CheckboxField;
