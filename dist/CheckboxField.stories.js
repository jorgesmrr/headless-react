import React from "react";

import CheckboxField from "./CheckboxField";

export default {

    title: "Form/CheckboxField",

    component: CheckboxField,

};

export const Default = (args) => (React.createElement(CheckboxField, Object.assign({}, args)));

Default.args = { label: "My field" };

