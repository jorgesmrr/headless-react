import React from "react";
import RadioGroup from "./RadioGroup";
import { withKnobs } from "@storybook/addon-knobs";
import RadioField from "../radio-field/RadioField";

export default {
  title: "Form/RadioGroup",
  component: RadioGroup,
  decorators: [withKnobs],
};

class BindindTest extends React.Component {
  state = {
    selectedOption: undefined,
  };

  render() {
    return (
      <div>
        <RadioGroup
          name="binding"
          value={this.state.selectedOption}
          onChange={(option) => this.setState({ selectedOption: option })}
        >
          <RadioField label="A" value={1} />
          <RadioField label="B" value={2} />
          <RadioField label="C" value={3} />
        </RadioGroup>
        <p>Selected option: {this.state.selectedOption}</p>
      </div>
    );
  }
}

export const Binding = () => <BindindTest />;
