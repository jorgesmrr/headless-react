import React from "react";
import { Field } from "../field/Field";
import FieldWrapper, { FieldWrapperProps } from "../field-wrapper/FieldWrapper";

interface SelectFieldProps extends FieldWrapperProps {
  handleChange?: Function;
}

class SelectedField extends Field<SelectFieldProps> {
  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (this.props.error && this.props.autoCleanErrors) {
      // todo
    }

    this.props.handleChange?.(event);
  }

  render() {
    return (
      <FieldWrapper
        for={this.props.id}
        label={this.props.label}
        hint={this.props.hint}
        error={this.props.error}
      >
        <div>
          <select
            id={this.props.id}
            placeholder={this.props.placeholder}
            className={this.props.error ? "border-danger-2" : ""}
            disabled={this.props.disabled}
            onChange={(ev) => this.handleChange(ev)}
          >
            {this.props.placeholder && (
              <option value="null" disabled>
                {this.props.placeholder}
              </option>
            )}
            {this.props.children}
          </select>
        </div>
      </FieldWrapper>
    );
  }
}

export default SelectedField;
