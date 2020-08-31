import React from "react";
import RadioField from "../../components/input/radio-field/RadioField";
import RadioGroup from "../../components/input/radio-group/RadioGroup";

export default {
  title: "Form/RadioField",
  component: RadioField,
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
