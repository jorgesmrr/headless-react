import React, { useRef, useState } from "react";
import TextField from "../../components/input/text-field/TextField";
import { Story } from "@storybook/react/types-6-0";
import Field from "../../components/input/field/Field";

export default {
    title: "Form/TextField",
    component: TextField,
};

const Template: Story = (args) => {
    const textField = useRef<TextField>(null);
    const [enterCount, setEnterCount] = useState<number>(0);

    const focus = () => {
        textField.current?.focus();
    };

    const onEnter = () => setEnterCount(enterCount + 1);

    return (
        <div>
            <Field {...args}>
                <TextField ref={textField} onEnter={onEnter} {...args} />
            </Field>
            <a onClick={focus}>Focus</a>
            <p>Enter was pressed {enterCount} times.</p>
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

export const Binding: React.FC = () => {
    const [text, setText] = useState("");

    return (
        <Field label="Text">
            <TextField value={text} onChange={setText} />
            <p>Typed text: {text}</p>
        </Field>
    );
};
