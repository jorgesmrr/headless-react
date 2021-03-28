import React from "react";

export interface TextAreaFieldProps {
  value?: string | number;
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  autoCleanErrors?: boolean;
  onChange?: Function;
}

class TextAreaField extends React.Component<TextAreaFieldProps> {
  static defaultProps = {
    autoCleanErrors: true,
  };

  onChange(event: React.FormEvent<HTMLTextAreaElement>) {
    if (this.props.error && this.props.autoCleanErrors) {
      // todo
    }

    this.props.onChange?.((event.target as HTMLTextAreaElement).value);
  }

  render() {
    return (
      <textarea
        id={this.props.id}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
        className={this.props.error ? "field-error" : ""}
        disabled={this.props.disabled}
        onChange={(ev) => this.onChange(ev)}
      />
    );
  }
}

export default TextAreaField;
