import React from "react";

import RadioField from "../radio-field/RadioField";

import RadioGroup from "../radio-group/RadioGroup";

export default {

    title: "Form/RadioField",

    component: RadioField,

};

class BindindTest extends React.Component {

    constructor() {

        super(...arguments);

        this.state = {

            selectedOption: undefined,

        };

    }

    render() {

        return (React.createElement("div", null,

            React.createElement(RadioGroup, { name: "binding", value: this.state.selectedOption, onChange: (option) => this.setState({ selectedOption: option }) },

                React.createElement(RadioField, { label: "A", value: 1 }),

                React.createElement(RadioField, { label: "B", value: 2 }),

                React.createElement(RadioField, { label: "C", value: 3 })),

            React.createElement("p", null,

                "Selected option: ",

                this.state.selectedOption)));

    }

}

export const Binding = () => React.createElement(BindindTest, null);

