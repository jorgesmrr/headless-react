import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import SelectField from "../../../../components/input/select-field/SelectField";

const selectName = "my select";
const options = ["A", "B", "C"];
const selectedOption = options[0];

it("should have the correct selected value", async () => {
  const { getByRole } = render(
    <form name="my form">
      <SelectField name={selectName} value={selectedOption} options={options} />
    </form>
  );

  expect(getByRole("form")).toHaveFormValues({ [selectName]: selectedOption });
});

it("should be disabled", async () => {
  const { getByRole } = render(
    <SelectField value={selectedOption} options={options} disabled />
  );

  expect(getByRole("combobox")).toBeDisabled();
});

it("should have error class", async () => {
  const { getByRole } = render(
    <SelectField value={selectedOption} options={options} error />
  );

  expect(getByRole("combobox")).toHaveClass("select-field--error");
});

it("should have the given placeholder", async () => {
  const placeholder = "my placeholder";
  const { getByRole } = render(
    <SelectField
      value={selectedOption}
      options={options}
      placeholder={placeholder}
    />
  );

  expect(getByRole("combobox")).toHaveAttribute("placeholder", placeholder);
});

it("should emit changes", async () => {
  const onChange = jest.fn();

  const Wrapper = () => {
    const [value, setValue] = useState<string | null>(null);

    const onChangeWrapper = (value: string) => {
      onChange();
      setValue(value);
    };

    return (
      <form name="my form">
        <SelectField
          name={selectName}
          value={value}
          options={options}
          onChange={onChangeWrapper}
        />
      </form>
    );
  };

  const { getByRole } = render(<Wrapper />);

  const selectInput = getByRole("combobox");
  userEvent.selectOptions(selectInput, selectedOption);

  expect(getByRole("form")).toHaveFormValues({ [selectName]: selectedOption });
  expect(onChange).toHaveBeenCalledTimes(1);
});
