import React from "react";

class FieldWrapper extends React.Component {

    getFormattedLabel() {

        if (!this.props.label)

            return null;

        return this.props.label.trim().indexOf(":") > 0

            ? this.props.label

            : `${this.props.label}:`;

    }

    render() {

        const showErrorMessage = this.props.error && typeof this.props.error === "string";

        return (React.createElement("div", { className: this.props.label || this.props.hint || showErrorMessage

                ? "form-group"

                : "" },

            (this.props.label || this.props.hint) && (React.createElement("label", null,

                this.getFormattedLabel(),

                this.props.label && this.props.hint && React.createElement("br", null),

                this.props.hint && (React.createElement("small", { className: "text-neutral-3" }, this.props.hint)))),

            this.props.children,

            showErrorMessage && (React.createElement("small", { className: "text-danger-3" }, this.props.error))));

    }

}

export default FieldWrapper;

