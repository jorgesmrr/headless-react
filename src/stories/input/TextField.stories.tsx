import { useRef, useState } from "react";
import TextField, {
  TextFieldProps,
} from "../../components/input/text-field/TextField";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Input/TextField",
  component: TextField,
};

const Template: Story<TextFieldProps> = (args) => {
  const [text, setText] = useState("");
  const textField = useRef<TextField>(null);

  const focus = () => {
    textField.current?.focus();
  };

  return (
    <div>
      <TextField onChange={setText} ref={textField} {...args} value={text} />
      <p>Typed text: "{text}"</p>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = { placeholder: "Select an option" };

export const Invalid = Template.bind({});
Invalid.args = { ...Default.args, error: true };
