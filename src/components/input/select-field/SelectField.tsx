import classNames from "classnames";
import React from "react";

export interface SelectFieldProps {
    value: string | number;
    options: Array<string | number | Object>;
    valueKey?: string;
    labelKey?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    autoCleanErrors?: boolean;
    className?: string;
    onChange?: Function;
}

class SelectField extends React.Component<SelectFieldProps> {
    static defaultProps = {
        autoCleanErrors: true,
    };

    getItemFromValue(value: string | number) {
        return this.props.options.find(
            (o) => this.getItemValue(o).toString() === value
        );
    }

    getItemValue(item: any): string | number {
        return this.props.valueKey ? item[this.props.valueKey] : item;
    }

    getItemLabel(item: any): string {
        return this.props.labelKey ? item[this.props.labelKey] : item;
    }

    handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
        if (this.props.error && this.props.autoCleanErrors) {
            // todo clear error
        }

        this.props.onChange?.(this.getItemFromValue(event.target.value));
    }

    render() {
        let className = classNames("select-field", this.props.className, {
            "select-field--error": this.props.error,
        });

        return (
            <select
                id={this.props.id}
                name={this.props.name}
                placeholder={this.props.placeholder}
                className={className}
                disabled={this.props.disabled}
                value={this.props.value || ""}
                onChange={(ev) => this.handleChange(ev)}
            >
                <option value="" disabled hidden={!this.props.placeholder}>
                    {this.props.placeholder}
                </option>

                {this.props.options?.map((i) => {
                    const value = this.getItemValue(i);

                    return (
                        <option key={value} value={value}>
                            {this.getItemLabel(i)}
                        </option>
                    );
                })}
            </select>
        );
    }
}

export default SelectField;
