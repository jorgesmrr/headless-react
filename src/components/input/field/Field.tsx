import React from "react";

export interface FieldProps {
    for?: string;
    label?: string;
    hint?: string;
    error?: string;
}

class Field extends React.Component<FieldProps> {
    render() {
        return (
            <div className="field">
                {this.props.label && (
                    <label htmlFor={this.props.for}>
                        {this.props.label}

                        {this.props.hint && <br />}

                        {this.props.hint && (
                            <small className="field-hint">
                                {this.props.hint}
                            </small>
                        )}
                    </label>
                )}

                {this.props.children}

                {this.props.error && (
                    <small className="field-error">{this.props.error}</small>
                )}
            </div>
        );
    }
}

export default Field;
