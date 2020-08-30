import React from "react";
import CheckboxField from "./CheckboxField";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Form/CheckboxField",
  component: CheckboxField,
  decorators: [withKnobs],
};

export const Default = () => (
  <CheckboxField label={text("label", "My field")} />
);
