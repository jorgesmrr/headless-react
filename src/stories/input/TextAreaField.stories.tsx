import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import TextAreaField, {
  TextAreaFieldProps,
} from "../../components/input/text-area-field/TextAreaField";
import Field from "../../components/input/field/Field";

export default {
  title: "Input/TextAreaField",
  component: TextAreaField,
};

const Template: Story<TextAreaFieldProps> = () => {
  const [text, setText] = useState("");

  return (
    <Field label="Text">
      <TextAreaField value={text} onChange={setText} />
      <p>Typed text: {text}</p>
    </Field>
  );
};

export const Default = Template.bind({});
Default.args = { placeholder: "Select an option" };

export const Invalid = Template.bind({});
Invalid.args = { ...Default.args, error: true };
