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
    className?: string;
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
        let className = this.props.className || "";
        if (this.props.error) {
            className += " field-error";
        }

        return (
            <input
                id={this.props.id}
                name={this.props.name}
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                className={className}
                disabled={this.props.disabled}
                onChange={(ev) => this.onChange(ev)}
            />
        );
    }
}

export default TextField;
