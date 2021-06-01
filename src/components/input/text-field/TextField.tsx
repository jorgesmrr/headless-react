import classNames from "classnames";
import React from "react";

export interface TextFieldProps {
  value: string | number;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  type?: string;
  className?: string;
  autoFocus?: boolean;
  dataTestId?: string;
  onChange?: Function;
  onEnter?: Function;
}

class TextField extends React.Component<TextFieldProps> {
  inputRef: React.RefObject<HTMLInputElement> | null = null;

  static defaultProps = {
    type: "text",
  };

  constructor(props: TextFieldProps) {
    super(props);
    this.inputRef = React.createRef();
  }

  focus() {
    this.inputRef?.current?.focus();
  }

  onChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.onChange?.((event.target as HTMLInputElement).value);
  }

  onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      this.props.onEnter?.();
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.focus();
    }
  }

  render() {
    let className = classNames("text-field", this.props.className, {
      "text-field--error": this.props.error,
    });

    return (
      <input
        ref={this.inputRef}
        id={this.props.id}
        name={this.props.name}
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        className={className}
        disabled={this.props.disabled}
        data-testid={this.props.dataTestId}
        onChange={(ev) => this.onChange(ev)}
        onKeyDown={(event) => this.onKeyDown(event)}
      />
    );
  }
}

export default TextField;
