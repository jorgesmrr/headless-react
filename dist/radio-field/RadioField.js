import React from "react";

import { RadioContext } from "../radio-group/RadioGroup";

class RadioField extends React.Component {

    render() {

        return (React.createElement(RadioContext.Consumer, null, ({ selectedValue, name, onChange }) => (React.createElement("label", { className: "block" },

            React.createElement("input", { type: "radio", id: this.props.id, name: name, checked: selectedValue === this.props.value, disabled: this.props.disabled, onChange: (ev) => onChange === null || onChange === void 0 ? void 0 : onChange(ev, this.props.value) }),

            this.props.label))));

    }

}

export default RadioField;

