import React, { useRef, useState } from "react";
import TextField from "../../components/input/text-field/TextField";
import { Story } from "@storybook/react/types-6-0";
import Field from "../../components/input/field/Field";

export default {
  title: "Input/TextField",
  component: TextField,
};

const Template: Story = (args) => {
  const [text, setText] = useState("");
  const textField = useRef<TextField>(null);

  const focus = () => {
    textField.current?.focus();
  };

  return (
    <div>
      <Field {...args}>
        <TextField value={text} onChange={setText} ref={textField} {...args} />
      </Field>
      <p>Typed text: "{text}"</p>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { label: "My label", placeholder: "Select an option" };

export const WithHint = Template.bind({});
WithHint.args = { ...Default.args, hint: "Be creative!" };

export const Invalid = Template.bind({});
Invalid.args = { ...Default.args, error: true };

export const InvalidWithMessage = Template.bind({});
InvalidWithMessage.args = { ...Default.args, error: "Required field" };
