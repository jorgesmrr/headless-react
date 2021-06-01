import React, { useState } from "react";
import RadioField from "../../components/input/radio-field/RadioField";
import RadioGroup from "../../components/input/radio-group/RadioGroup";

export default {
  title: "Input/RadioField",
  component: RadioField,
};

const BindindTest: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div>
      <RadioGroup
        name="binding"
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
      >
        <RadioField label="A" value={1} />
        <RadioField label="B" value={2} />
        <RadioField label="C" value={3} />
      </RadioGroup>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export const Binding = () => <BindindTest />;
