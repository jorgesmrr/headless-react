import React from "react";
import FieldWrapper, { FieldWrapperProps } from "../field-wrapper/FieldWrapper";
import { Field, FieldProps } from "../field/Field";

interface TextProps extends FieldWrapperProps {
  type?: string;
  onChange?: Function;
}

export type TextFieldProps = TextProps & FieldProps & FieldWrapperProps;

class TextField extends Field<TextFieldProps> {
  static defaultProps = {
    ...Field.defaultProps,
    type: "text",
  };

  onChange(event: React.FormEvent<HTMLInputElement>) {
    if (this.props.error && this.props.autoCleanErrors) {
      // todo
    }

    this.props.onChange?.(event);
  }

  render() {
    return (
      <FieldWrapper
        for={this.props.id}
        label={this.props.label}
        hint={this.props.hint}
        error={this.props.error}
      >
        <input
          ref="inputFieldRef"
          id={this.props.id}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          className={this.getInputClassName()}
          disabled={this.props.disabled}
          onChange={(ev) => this.onChange(ev)}
        />
      </FieldWrapper>
    );
  }
}

export default TextField;
