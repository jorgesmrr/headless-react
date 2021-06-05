import React, { useState } from "react";
import RadioField from "../../components/input/radio-field/RadioField";
import RadioGroup from "../../components/input/radio-group/RadioGroup";

export default {
  title: "Input/RadioField",
  component: RadioField,
};

const Template: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div>
      <RadioGroup
        name="binding"
        legend="Field legend"
        value={selectedOption}
        onChange={setSelectedOption}
      >
        <RadioField label="A" value={1} />
        <RadioField label="B" value={2} />
        <RadioField label="C" value={3} />
      </RadioGroup>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export const Default = () => <Template />;
