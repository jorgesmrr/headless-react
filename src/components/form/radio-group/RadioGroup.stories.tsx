import React from "react";
import RadioGroup from "./RadioGroup";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Form/RadioGroup",
  component: RadioGroup,
  decorators: [withKnobs],
};

interface BindingOption {
  label: string;
  value: number;
}

interface BindingTest {
  selectedOption?: BindingOption;
}

class BindindTest extends React.Component<any, BindingTest> {
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
        <RadioGroup
          options={this.options}
          value={this.state.selectedOption}
          labelKey="label"
          valueKey="value"
          onChange={(option: BindingOption) =>
            this.setState({ selectedOption: option })
          }
        />
        <p>Selected option: {this.state.selectedOption?.label}</p>
      </div>
    );
  }
}

export const Binding = () => <BindindTest />;
