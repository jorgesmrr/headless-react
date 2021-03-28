import React from "react";

export interface TextFieldProps {
  value?: string | number;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  autoCleanErrors?: boolean;
  type?: string;
  onChange?: Function;
}

class TextField extends React.Component<TextFieldProps> {
  static defaultProps = {
    type: "text",
    autoCleanErrors: true,
  };

  onChange(event: React.FormEvent<HTMLInputElement>) {
    if (this.props.error && this.props.autoCleanErrors) {
      // todo clear error
    }

    this.props.onChange?.((event.target as HTMLInputElement).value);
  }

  render() {
    return (
      <input
        id={this.props.id}
        name={this.props.name}
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        className={this.props.error ? "field-error" : ""}
        disabled={this.props.disabled}
        onChange={(ev) => this.onChange(ev)}
      />
    );
  }
}

export default TextField;
