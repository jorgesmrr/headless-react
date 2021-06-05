import { render } from "@testing-library/react";
import Field from "../../../../components/input/field/Field";

const label = "My field";

it("should display the correct label", async () => {
  const { getByTestId } = render(<Field dataTestId="field" label={label} />);

  expect(getByTestId("field")).toHaveTextContent(label);
});

it("should show hint message", async () => {
  const hintMessage = "some hint message";
  const { getByTestId } = render(
    <Field dataTestId="field" hint={hintMessage} />
  );

  expect(getByTestId("field")).toHaveTextContent(hintMessage);
});

it("should show error message", async () => {
  const errorMessage = "some error message";
  const { getByTestId } = render(
    <Field dataTestId="field" error={errorMessage} />
  );

  expect(getByTestId("field")).toHaveTextContent(errorMessage);
});
