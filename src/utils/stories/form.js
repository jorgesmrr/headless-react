import { text } from "@storybook/addon-knobs";

export const getDefaultFieldData = () => ({
  label: text("label", "My field"),
  placeholder: text("placeholder", "Type something here..."),
});
