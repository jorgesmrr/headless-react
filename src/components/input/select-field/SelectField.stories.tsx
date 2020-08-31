import React from "react";
import SelectField, { SelectFieldProps } from "./SelectField";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Form/SelectField",
  component: SelectField,
};

const options = ["One", "Two", "Three"];

const Template: Story<SelectFieldProps> = (args) => <SelectField {...args} />;

export const Default = Template.bind({});
Default.args = { label: "My label", placeholder: "Select an option", options };

export const WithHint = Template.bind({});
WithHint.args = { ...Default.args, hint: "Be creative!" };

export const Invalid = Template.bind({});
Invalid.args = { ...Default.args, error: true };

export const InvalidWithMessage = Template.bind({});
InvalidWithMessage.args = { ...Default.args, error: "Required field" };

class PrimitiveBindindTest extends React.Component {
  state = {
    selectedOption: null,
  };

  options = ["A", "B", "C"];

  render() {
    return (
      <div>
        <SelectField
          label="Text"
          options={this.options}
          placeholder="Select an option"
          onChange={(ev: any) => this.setState({ selectedOption: ev })}
        />
        <p>Selected option: {this.state.selectedOption}</p>
      </div>
    );
  }
}

export const PrimitiveBinding = () => <PrimitiveBindindTest />;

interface ObjectBindindTestState {
  selectedOption?: {
    label: string;
    value: number;
  };
}

class ObjectBindindTest extends React.Component<any, ObjectBindindTestState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedOption: undefined,
    };
  }

  options = [
    { label: "A", value: 1 },
    { label: "B", value: 2 },
    { label: "C", value: 3 },
  ];

  render() {
    return (
      <div>
        <SelectField
          label="Text"
          options={this.options}
          value={undefined}
          labelKey="label"
          valueKey="value"
          placeholder="Select an option"
          onChange={(ev: any) => this.setState({ selectedOption: ev })}
        />
        <p>Selected option: {this.state.selectedOption?.label}</p>
      </div>
    );
  }
}

export const ObjectBinding = () => <ObjectBindindTest />;
