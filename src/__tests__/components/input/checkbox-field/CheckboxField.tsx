import { render } from "@testing-library/react";
import CheckboxField from "../../../../components/input/checkbox-field/CheckboxField";

const label = "My checkbox";

it("should display the correct label", async () => {
  const { getByRole } = render(<CheckboxField label={label} />);

  expect(getByRole("checkbox", { name: label })).toBeInTheDocument();
});

it("should toggle on click", async () => {
  const { getByRole } = render(<CheckboxField label={label} />);

  const checkbox = getByRole("checkbox");
  checkbox.click();

  expect(checkbox).toBeChecked();
});

it("should be checked", async () => {
  const { getByRole } = render(<CheckboxField label={label} checked />);

  expect(getByRole("checkbox")).toBeChecked();
});

it("should not be checked", async () => {
  const { getByRole } = render(<CheckboxField label={label} />);

  expect(getByRole("checkbox")).not.toBeChecked();
});

it("should be disabled", async () => {
  const { getByRole } = render(<CheckboxField label={label} disabled />);

  expect(getByRole("checkbox")).toBeDisabled();
});

it("should emit change", async () => {
  const onChange = jest.fn();

  const { getByRole } = render(
    <CheckboxField label={label} onChange={onChange} />
  );

  getByRole("checkbox").click();
  expect(onChange).toHaveBeenCalled();
});
