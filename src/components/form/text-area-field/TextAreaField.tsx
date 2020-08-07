import React from "react";
import { Field } from "../field/Field";
import FieldWrapper, { FieldWrapperProps } from "../field-wrapper/FieldWrapper";

interface TextFieldProps extends FieldWrapperProps {
  type?: string;
  onInput?: Function;
}

class TextAreaField extends Field<TextFieldProps> {
  static defaultProps = {
    type: "text",
  };

  onInput(event: React.FormEvent<HTMLTextAreaElement>) {
    if (this.props.error && this.props.autoCleanErrors) {
      // todo
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
        <textarea
          id={this.props.id}
          name={this.props.name}
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

export default TextAreaField;
