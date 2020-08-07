import React from "react";
import SelectField from "./SelectField";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { getDefaultFieldData } from "../../../utils/stories/form";

export default {
  title: "Form/SelectField",
  component: SelectField,
  decorators: [withKnobs],
};

const options = (
  <React.Fragment>
    <option>One</option>
    <option>Two</option>
    <option>Three</option>
  </React.Fragment>
);

export const Default = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <SelectField label={label} placeholder={placeholder}>
      {options}
    </SelectField>
  );
};

export const WithHint = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <SelectField
      label={label}
      placeholder={placeholder}
      hint={text("hint", "Be creative!")}
    >
      {options}
    </SelectField>
  );
};

export const Invalid = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <SelectField
      label={label}
      placeholder={placeholder}
      error={boolean("error", true)}
    >
      {options}
    </SelectField>
  );
};

export const InvalidWithMessage = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <SelectField
      label={label}
      placeholder={placeholder}
      error={text("error", "Required field")}
    >
      {options}
    </SelectField>
  );
};
