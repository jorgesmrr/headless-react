import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import TextAreaField from "../../components/input/text-area-field/TextAreaField";
import Field from "../../components/input/field/Field";

export default {
  title: "Form/TextAreaField",
  component: TextAreaField,
};

const Template: Story = (args) => (
  <Field {...args}>
    <TextAreaField {...args} />
  </Field>
);

export const Default = Template.bind({});
Default.args = { label: "My label", placeholder: "Select an option" };

export const WithHint = Template.bind({});
WithHint.args = { ...Default.args, hint: "Be creative!" };

export const Invalid = Template.bind({});
Invalid.args = { ...Default.args, error: true };

export const InvalidWithMessage = Template.bind({});
InvalidWithMessage.args = { ...Default.args, error: "Required field" };

export const Binding: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <Field label="Text">
      <TextAreaField value={text} onChange={setText} />
      <p>Typed text: {text}</p>
    </Field>
  );
};
