import React from "react";
import SelectField from "./SelectField";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { getDefaultFieldData } from "../../../utils/stories/form";

export default {
  title: "Form/SelectField",
  component: SelectField,
  decorators: [withKnobs],
};

const options = ["One", "Two", "Three"];

export const Default = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <SelectField label={label} placeholder={placeholder} options={options} />
  );
};

export const WithHint = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <SelectField
      label={label}
      placeholder={placeholder}
      hint={text("hint", "Be creative!")}
      options={options}
    />
  );
};

export const Invalid = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <SelectField
      label={label}
      placeholder={placeholder}
      error={boolean("error", true)}
      options={options}
    />
  );
};

export const InvalidWithMessage = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <SelectField
      label={label}
      placeholder={placeholder}
      error={text("error", "Required field")}
      options={options}
    />
  );
};

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
