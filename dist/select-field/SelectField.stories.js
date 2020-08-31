import React from "react";

import SelectField from "./SelectField";

export default {

    title: "Form/SelectField",

    component: SelectField,

};

const options = ["One", "Two", "Three"];

const Template = (args) => React.createElement(SelectField, Object.assign({}, args));

export const Default = Template.bind({});

Default.args = { label: "My label", placeholder: "Select an option", options };

export const WithHint = Template.bind({});

WithHint.args = Object.assign(Object.assign({}, Default.args), { hint: "Be creative!" });

export const Invalid = Template.bind({});

Invalid.args = Object.assign(Object.assign({}, Default.args), { error: true });

export const InvalidWithMessage = Template.bind({});

InvalidWithMessage.args = Object.assign(Object.assign({}, Default.args), { error: "Required field" });

class PrimitiveBindindTest extends React.Component {

    constructor() {

        super(...arguments);

        this.state = {

            selectedOption: null,

        };

        this.options = ["A", "B", "C"];

    }

    render() {

        return (React.createElement("div", null,

            React.createElement(SelectField, { label: "Text", options: this.options, placeholder: "Select an option", onChange: (ev) => this.setState({ selectedOption: ev }) }),

            React.createElement("p", null,

                "Selected option: ",

                this.state.selectedOption)));

    }

}

export const PrimitiveBinding = () => React.createElement(PrimitiveBindindTest, null);

class ObjectBindindTest extends React.Component {

    constructor(props) {

        super(props);

        this.options = [

            { label: "A", value: 1 },

            { label: "B", value: 2 },

            { label: "C", value: 3 },

        ];

        this.state = {

            selectedOption: undefined,

        };

    }

    render() {

        var _a;

        return (React.createElement("div", null,

            React.createElement(SelectField, { label: "Text", options: this.options, value: undefined, labelKey: "label", valueKey: "value", placeholder: "Select an option", onChange: (ev) => this.setState({ selectedOption: ev }) }),

            React.createElement("p", null,

                "Selected option: ", (_a = this.state.selectedOption) === null || _a === void 0 ? void 0 :

                _a.label)));

    }

}

export const ObjectBinding = () => React.createElement(ObjectBindindTest, null);

