import React from "react";

export interface FieldProps {
  id?: string;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  inputClassName?: string;

  value?: string | number | readonly string[];

  autoCleanErrors?: boolean;

  error?: string | boolean;
}

export class Field<T> extends React.Component<FieldProps & T> {
  defaultProps = {
    autoCleanErrors: true,
  };

  getInputClassName(): string {
    let classes = this.props.inputClassName
      ? this.props.inputClassName.split(" ")
      : [];
    if (this.props.error) classes.push("border-danger-2");
    return classes.join(" ");
  }
}
