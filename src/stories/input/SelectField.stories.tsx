import React from "react";
import { Story } from "@storybook/react/types-6-0";
import SelectField, {
  SelectFieldProps,
} from "../../components/input/select-field/SelectField";
import Field from "../../components/input/field/Field";

export default {
  title: "Form/SelectField",
  component: SelectField,
};

const options = ["One", "Two", "Three"];

const Template: Story = (args) => (
  <Field {...args}>
    <SelectField {...(args as SelectFieldProps)} />
  </Field>
);

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
      <Field label="Text">
        <SelectField
          options={this.options}
          placeholder="Select an option"
          onChange={(ev: any) => this.setState({ selectedOption: ev })}
        />
        <p>Selected option: {this.state.selectedOption}</p>
      </Field>
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
      <Field label="Text">
        <SelectField
          options={this.options}
          value={undefined}
          labelKey="label"
          valueKey="value"
          placeholder="Select an option"
          onChange={(ev: any) => this.setState({ selectedOption: ev })}
        />
        <p>Selected option: {this.state.selectedOption?.label}</p>
      </Field>
    );
  }
}

export const ObjectBinding = () => <ObjectBindindTest />;
