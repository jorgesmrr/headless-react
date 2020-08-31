import React from "react";

import { Field } from "../field/Field";

import FieldWrapper from "../field-wrapper/FieldWrapper";

class TextAreaField extends Field {

    onChange(event) {

        var _a, _b;

        if (this.props.error && this.props.autoCleanErrors) {

        }

        (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, event);

    }

    render() {

        return (React.createElement(FieldWrapper, { for: this.props.id, label: this.props.label, hint: this.props.hint, error: this.props.error },

            React.createElement("textarea", { id: this.props.id, name: this.props.name, placeholder: this.props.placeholder, value: this.props.value, className: this.getInputClassName(), disabled: this.props.disabled, onChange: (ev) => this.onChange(ev) })));

    }

}

TextAreaField.defaultProps = Object.assign(Object.assign({}, Field.defaultProps), { type: "text" });

export default TextAreaField;

