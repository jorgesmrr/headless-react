import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CheckboxField, {
    CheckboxProps,
} from "../../components/input/checkbox-field/CheckboxField";

export default {
    title: "Input/CheckboxField",
    component: CheckboxField,
};

export const Default: Story<CheckboxProps> = (args) => (
    <CheckboxField {...args} />
);
Default.args = { label: "My field" };
