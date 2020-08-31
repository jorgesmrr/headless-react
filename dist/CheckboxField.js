import React from "react";

class CheckboxField extends React.Component {

    render() {

        return (React.createElement("label", { className: "block" },

            React.createElement("input", { type: "checkbox", id: this.props.id, name: this.props.name, checked: this.props.checked, disabled: this.props.disabled, onChange: (ev) => { var _a, _b; return (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, ev); } }),

            this.props.label));

    }

}

export default CheckboxField;

