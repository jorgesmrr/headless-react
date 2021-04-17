import classNames from "classnames";
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
    className?: string;
    onChange?: Function;
    onEnter?: Function;
}

class TextField extends React.Component<TextFieldProps> {
    input: React.RefObject<HTMLInputElement> | null = null;

    static defaultProps = {
        type: "text",
        autoCleanErrors: true,
    };

    constructor(props: TextFieldProps) {
        super(props);
        this.input = React.createRef();
    }

    focus() {
        this.input?.current?.focus();
    }

    onChange(event: React.FormEvent<HTMLInputElement>) {
        if (this.props.error && this.props.autoCleanErrors) {
            // todo clear error
        }

        this.props.onChange?.((event.target as HTMLInputElement).value);
    }

    onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            this.props.onEnter?.();
        }
    }

    render() {
        let className = classNames("text-field", this.props.className, {
            "text-field--error": this.props.error,
        });

        return (
            <input
                id={this.props.id}
                name={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                className={className}
                disabled={this.props.disabled}
                ref={this.input}
                onChange={(ev) => this.onChange(ev)}
                onKeyDown={(event) => this.onKeyDown(event)}
            />
        );
    }
}

export default TextField;
