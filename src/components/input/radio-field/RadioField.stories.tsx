import React from "react";
import RadioField from "./RadioField";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Form/RadioField",
  component: RadioField,
  decorators: [withKnobs],
};

export const Default = () => (
  <RadioField label={text("label", "My field")} value="" />
);
