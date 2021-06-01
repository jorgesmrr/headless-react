import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import SelectField, {
  SelectFieldProps,
} from "../../components/input/select-field/SelectField";
import Field from "../../components/input/field/Field";

export default {
  title: "Input/SelectField",
  component: SelectField,
};

const options = ["One", "Two", "Three"];

const PrimitiveBindindTest: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = ["A", "B", "C"];

  return (
    <Field label="Text">
      <SelectField
        value={selectedOption}
        options={options}
        placeholder="Select an option"
        onChange={setSelectedOption}
      />
      <p>Selected option: {selectedOption}</p>
    </Field>
  );
};

export const PrimitiveBinding = () => <PrimitiveBindindTest />;

interface ObjectBindindItem {
  label: string;
  value: number;
}

const ObjectBindindTest: React.FC = () => {
  const [
    selectedOption,
    setSelectedOption,
  ] = useState<ObjectBindindItem | null>(null);

  const options = [
    { label: "A", value: 1 },
    { label: "B", value: 2 },
    { label: "C", value: 3 },
  ];

  return (
    <Field label="Text">
      <SelectField
        options={options}
        value={null}
        labelKey="label"
        valueKey="value"
        placeholder="Select an option"
        onChange={setSelectedOption}
      />
      <p>Selected option: {selectedOption?.label}</p>
    </Field>
  );
};

export const ObjectBinding = () => <ObjectBindindTest />;

const Template: Story = (args) => (
  <Field {...args}>
    <SelectField {...(args as SelectFieldProps)} />
  </Field>
);

const basicArgs = {
  label: "My label",
  placeholder: "Select an option",
  options,
};

export const WithHint = Template.bind({});
WithHint.args = { ...basicArgs, hint: "Be creative!" };

export const Invalid = Template.bind({});
Invalid.args = { ...basicArgs, error: true };

export const InvalidWithMessage = Template.bind({});
InvalidWithMessage.args = { ...basicArgs, error: "Required field" };
