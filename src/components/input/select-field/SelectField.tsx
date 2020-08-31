import React from "react";
import { Field, FieldProps } from "../field/Field";
import FieldWrapper, { FieldWrapperProps } from "../field-wrapper/FieldWrapper";

interface SelectProps {
  value?: string | number;
  options: Array<string | number | Object>;
  valueKey?: string;
  labelKey?: string;
  onChange?: Function;
}

export type SelectFieldProps = SelectProps & FieldProps & FieldWrapperProps;

class SelectedField extends Field<SelectFieldProps> {
  getItemFromValue(value: string | number) {
    return this.props.options.find(
      (o) => this.getItemValue(o).toString() === value
    );
  }

  getItemValue(item: any): string | number {
    return this.props.valueKey ? item[this.props.valueKey] : item;
  }

  getItemLabel(item: any): string {
    return this.props.labelKey ? item[this.props.labelKey] : item;
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (this.props.error && this.props.autoCleanErrors) {
      // todo
    }

    this.props.onChange?.(this.getItemFromValue(event.target.value));
  }

  render() {
    return (
      <FieldWrapper
        for={this.props.id}
        label={this.props.label}
        hint={this.props.hint}
        error={this.props.error}
      >
        <select
          id={this.props.id}
          placeholder={this.props.placeholder}
          className={this.props.error ? "border-danger-2" : ""}
          disabled={this.props.disabled}
          value={this.props.value || ""}
          onChange={(ev) => this.handleChange(ev)}
        >
          <option value="" disabled hidden={!this.props.placeholder}>
            {this.props.placeholder}
          </option>

          {this.props.options?.map((i) => {
            const value = this.getItemValue(i);

            return (
              <option key={value} value={value}>
                {this.getItemLabel(i)}
              </option>
            );
          })}
        </select>
      </FieldWrapper>
    );
  }
}

export default SelectedField;
