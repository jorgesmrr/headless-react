import React from "react";
import FieldWrapper, { FieldWrapperProps } from "../field-wrapper/FieldWrapper";
import { Field } from "../field/Field";

interface TextFieldProps extends FieldWrapperProps {
  type?: string;
  onInput?: Function;
}

class TextField extends Field<TextFieldProps> {
  static defaultProps = {
    type: "text",
  };

  onInput(event: React.FormEvent<HTMLInputElement>) {
    if (this.props.error && this.props.autoCleanErrors) {
      // todo this.$emit("update:error", null);
    }

    this.props.onInput?.(event);
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
          onInput={(ev) => this.onInput(ev)}
        />
      </FieldWrapper>
    );
  }
}

export default TextField;
