import React from "react";

import { Field } from "../field/Field";

import FieldWrapper from "../field-wrapper/FieldWrapper";

class SelectField extends Field {

    getItemFromValue(value) {

        return this.props.options.find((o) => this.getItemValue(o).toString() === value);

    }

    getItemValue(item) {

        return this.props.valueKey ? item[this.props.valueKey] : item;

    }

    getItemLabel(item) {

        return this.props.labelKey ? item[this.props.labelKey] : item;

    }

    handleChange(event) {

        var _a, _b;

        if (this.props.error && this.props.autoCleanErrors) {

        }

        (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, this.getItemFromValue(event.target.value));

    }

    render() {

        var _a;

        return (React.createElement(FieldWrapper, { for: this.props.id, label: this.props.label, hint: this.props.hint, error: this.props.error },

            React.createElement("select", { id: this.props.id, placeholder: this.props.placeholder, className: this.props.error ? "border-danger-2" : "", disabled: this.props.disabled, value: this.props.value || "", onChange: (ev) => this.handleChange(ev) },

                React.createElement("option", { value: "", disabled: true, hidden: !this.props.placeholder }, this.props.placeholder), (_a = this.props.options) === null || _a === void 0 ? void 0 :

                _a.map((i) => {

                    const value = this.getItemValue(i);

                    return (React.createElement("option", { key: value, value: value }, this.getItemLabel(i)));

                }))));

    }

}

export default SelectField;

