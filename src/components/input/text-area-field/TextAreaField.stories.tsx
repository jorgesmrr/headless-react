import React from "react";
import TextAreaField, { TextAreaFieldProps } from "./TextAreaField";
import { Story } from "@storybook/react/types-6-0";

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

class BindindTest extends React.Component {
  state = {
    text: "Text",
  };

  render() {
    return (
      <div>
        <TextAreaField
          label="Text"
          value={this.state.text}
          onChange={(ev: any) => this.setState({ text: ev.target.value })}
        />
        <p>Typed text: {this.state.text}</p>
      </div>
    );
  }
}

export const Binding = () => <BindindTest />;
