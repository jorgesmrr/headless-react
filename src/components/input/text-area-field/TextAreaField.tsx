import classNames from "classnames";
import React from "react";

export interface TextAreaFieldProps {
  value: string | number;
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  dataTestId?: string;
  onChange?: Function;
}

class TextAreaField extends React.Component<TextAreaFieldProps> {
  inputRef: React.RefObject<HTMLTextAreaElement> | null = null;

  constructor(props: TextAreaFieldProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  focus() {
    this.inputRef?.current?.focus();
  }

  onChange(event: React.FormEvent<HTMLTextAreaElement>) {
    this.props.onChange?.((event.target as HTMLTextAreaElement).value);
  }

  render() {
    let className = classNames("text-area-field", this.props.className, {
      "text-area-field--error": this.props.error,
    });

    return (
      <textarea
        ref={this.inputRef}
        id={this.props.id}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
        className={className}
        disabled={this.props.disabled}
        data-testid={this.props.dataTestId}
        onChange={(ev) => this.onChange(ev)}
      />
    );
  }
}

export default TextAreaField;
