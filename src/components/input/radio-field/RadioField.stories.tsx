import React from "react";
import RadioField, { RadioProps } from "./RadioField";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Form/RadioField",
  component: RadioField,
};

export const Default: Story<RadioProps> = (args) => <RadioField {...args} />;
Default.args = { label: "My field" };
