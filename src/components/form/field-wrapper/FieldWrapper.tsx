import React from "react";

export interface FieldWrapperProps {
  for?: string;
  label?: string;
  hint?: string;
  error?: string | boolean;
}

class FieldWrapper extends React.Component<FieldWrapperProps> {
  getFormattedLabel() {
    if (!this.props.label) return null;
    return this.props.label.trim().indexOf(":") > 0
      ? this.props.label
      : `${this.props.label}:`;
  }

  render() {
    // todo for
    const showErrorMessage =
      this.props.error && typeof this.props.error === "string";

    return (
      <div
        className={
          this.props.label || this.props.hint || showErrorMessage
            ? "form-group"
            : ""
        }
      >
        {(this.props.label || this.props.hint) && (
          <label>
            {this.getFormattedLabel()}

            {this.props.label && this.props.hint && <br />}

            {this.props.hint && (
              <small className="text-neutral-3">{this.props.hint}</small>
            )}
          </label>
        )}

        {this.props.children}

        {showErrorMessage && (
          <small className="text-danger-3">{this.props.error}</small>
        )}
      </div>
    );
  }
}

export default FieldWrapper;
