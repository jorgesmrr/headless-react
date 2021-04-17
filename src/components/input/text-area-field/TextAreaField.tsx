import classNames from "classnames";
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
    className?: string;
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
        let className = classNames("text-area-field", this.props.className, {
            "text-area-field--error": this.props.error,
        });

        return (
            <textarea
                id={this.props.id}
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                className={className}
                disabled={this.props.disabled}
                onChange={(ev) => this.onChange(ev)}
            />
        );
    }
}

export default TextAreaField;
