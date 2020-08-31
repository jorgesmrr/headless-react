import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CheckboxField, { CheckboxProps } from "./CheckboxField";

export default {
  title: "Form/CheckboxField",
  component: CheckboxField,
};

export const Default: Story<CheckboxProps> = (args) => (
  <CheckboxField {...args} />
);
Default.args = { label: "My field" };
