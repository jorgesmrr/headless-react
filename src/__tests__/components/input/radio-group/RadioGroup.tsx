import { render } from "@testing-library/react";
import React, { useState } from "react";
import RadioField from "../../../../components/input/radio-field/RadioField";
import RadioGroup from "../../../../components/input/radio-group/RadioGroup";

const label = "My radio input";

it("should display the correct label", async () => {
  const { getByRole } = render(<RadioField label={label} value="1" />);

  expect(getByRole("radio", { name: label })).toBeInTheDocument();
});

it("should have the correct value", async () => {
  const fieldName = "my-radio-group";

  const { getByRole } = render(
    <RadioGroup name={fieldName}>
      <RadioField label={label} value="1" />
    </RadioGroup>
  );

  expect(getByRole("group")).toHaveFormValues({
    [fieldName]: "1",
  });
});

it("should be disabled", async () => {
  const { getByRole } = render(<RadioField label={label} value="1" disabled />);

  expect(getByRole("radio")).toBeDisabled();
});

it("should be correctly checked with initial value", async () => {
  const secondLabel = "My other radio input";

  const { getByRole } = render(
    <RadioGroup name="my-radio-group" value="2">
      <RadioField label={label} value="1" />
      <RadioField label={secondLabel} value="2" />
    </RadioGroup>
  );

  const firstRadio = getByRole("radio", { name: label });
  const secondRadio = getByRole("radio", { name: secondLabel });

  expect(firstRadio).not.toBeChecked();
  expect(secondRadio).toBeChecked();
});

it("should be correctly checked on click", async () => {
  const secondLabel = "My other radio input";

  const Wrapper: React.FC = () => {
    const [value, setValue] = useState();

    return (
      <RadioGroup name="my-radio-group" value={value} onChange={setValue}>
        <RadioField label={label} value="1" />
        <RadioField label={secondLabel} value="2" />
      </RadioGroup>
    );
  };

  const { getByRole } = render(<Wrapper />);

  const firstRadio = getByRole("radio", { name: label });
  const secondRadio = getByRole("radio", { name: secondLabel });

  firstRadio.click();

  expect(firstRadio).toBeChecked();
  expect(secondRadio).not.toBeChecked();
});
