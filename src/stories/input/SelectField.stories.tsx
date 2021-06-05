import { useState } from "react";
import { Story } from "@storybook/react/types-6-0";
import SelectField, {
  SelectFieldProps,
} from "../../components/input/select-field/SelectField";

export default {
  title: "Input/SelectField",
  component: SelectField,
};

const Template: Story<SelectFieldProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <SelectField
        value={selectedOption}
        onChange={setSelectedOption}
        {...props}
      />
      <p>
        Selected option:{" "}
        {props.labelKey ? selectedOption[props.labelKey] : selectedOption}
      </p>
    </div>
  );
};

export const StringOptions = Template.bind({});
StringOptions.args = {
  placeholder: "Select an item",
  options: ["A", "B", "C"],
};

export const ObjectOptions = Template.bind({});
ObjectOptions.args = {
  ...StringOptions.args,
  valueKey: "value",
  labelKey: "label",
  options: [
    { label: "A", value: 1 },
    { label: "B", value: 2 },
    { label: "C", value: 3 },
  ],
};

export const Invalid = Template.bind({});
Invalid.args = { ...StringOptions.args, error: true };
