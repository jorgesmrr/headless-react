import React from "react";

import TextAreaField from "./TextAreaField";

export default {

    title: "Form/TextAreaField",

    component: TextAreaField,

};

const Template = (args) => (React.createElement(TextAreaField, Object.assign({}, args)));

export const Default = Template.bind({});

Default.args = { label: "My label", placeholder: "Select an option" };

export const WithHint = Template.bind({});

WithHint.args = Object.assign(Object.assign({}, Default.args), { hint: "Be creative!" });

export const Invalid = Template.bind({});

Invalid.args = Object.assign(Object.assign({}, Default.args), { error: true });

export const InvalidWithMessage = Template.bind({});

InvalidWithMessage.args = Object.assign(Object.assign({}, Default.args), { error: "Required field" });

class BindindTest extends React.Component {

    constructor() {

        super(...arguments);

        this.state = {

            text: "Text",

        };

    }

    render() {

        return (React.createElement("div", null,

            React.createElement(TextAreaField, { label: "Text", value: this.state.text, onChange: (ev) => this.setState({ text: ev.target.value }) }),

            React.createElement("p", null,

                "Typed text: ",

                this.state.text)));

    }

}

export const Binding = () => React.createElement(BindindTest, null);

