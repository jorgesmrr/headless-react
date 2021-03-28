import React from "react";

export interface FieldProps {
  for?: string;
  label?: string;
  hint?: string;
  error?: string | boolean;
}

class Field extends React.Component<FieldProps> {
  render() {
    const showErrorMessage =
      this.props.error && typeof this.props.error === "string";

    return (
      <div className="field">
        {this.props.label && (
          <label htmlFor={this.props.for}>
            {this.props.label}

            {this.props.hint && <br />}

            {this.props.hint && (
              <small className="field-hint">{this.props.hint}</small>
            )}
          </label>
        )}

        {this.props.children}

        {showErrorMessage && (
          <small className="field-error">{this.props.error}</small>
        )}
      </div>
    );
  }
}

export default Field;
