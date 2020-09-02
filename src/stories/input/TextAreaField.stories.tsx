import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import TextAreaField, {
  TextAreaFieldProps,
} from "../../components/input/text-area-field/TextAreaField";

export default {
  title: "Form/TextAreaField",
  component: TextAreaField,
};

const Template: Story<TextAreaFieldProps> = (args) => (
  <TextAreaField {...args} />
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
    <div>
      <TextAreaField label="Text" value={text} onChange={setText} />
      <p>Typed text: {text}</p>
    </div>
  );
};
