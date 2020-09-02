import React from "react";
import { Field, FieldProps } from "../field/Field";
import FieldWrapper, { FieldWrapperProps } from "../field-wrapper/FieldWrapper";

interface TextAreaProps {
  type?: string;
  onChange?: Function;
}

export type TextAreaFieldProps = TextAreaProps & FieldProps & FieldWrapperProps;

class TextAreaField extends Field<TextAreaFieldProps> {
  static defaultProps = {
    ...Field.defaultProps,
    type: "text",
  };

  onChange(event: React.FormEvent<HTMLTextAreaElement>) {
    if (this.props.error && this.props.autoCleanErrors) {
      // todo
    }

    this.props.onChange?.((event.target as HTMLTextAreaElement).value);
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
          onChange={(ev) => this.onChange(ev)}
        />
      </FieldWrapper>
    );
  }
}

export default TextAreaField;
