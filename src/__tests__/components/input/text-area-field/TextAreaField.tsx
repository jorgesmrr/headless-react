import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextAreaField from "../../../../components/input/text-area-field/TextAreaField";

const textInputValue = "My text input value";
const textInputName = "my text input";

it("should have the correct value", async () => {
  const { getByRole } = render(
    <form name="my form">
      <TextAreaField name={textInputName} value={textInputValue} />
    </form>
  );

  expect(getByRole("form")).toHaveFormValues({
    [textInputName]: textInputValue,
  });
});

it("should have error class", async () => {
  const { getByRole } = render(<TextAreaField value={textInputValue} error />);

  expect(getByRole("textbox")).toHaveClass("text-area-field--error");
});

it("should have extra class", async () => {
  const extraClass = "some class";

  const { getByRole } = render(
    <TextAreaField value={textInputValue} className={extraClass} />
  );

  expect(getByRole("textbox")).toHaveClass(extraClass);
});

it("should be disabled", async () => {
  const { getByRole } = render(
    <TextAreaField value={textInputValue} disabled />
  );

  expect(getByRole("textbox")).toBeDisabled();
});

it("should emit changes", async () => {
  const onChange = jest.fn();
  const { getByRole } = render(
    <TextAreaField value={textInputValue} onChange={onChange} />
  );

  const text = "some text";
  const textInput = getByRole("textbox");

  userEvent.type(textInput, text);

  expect(onChange).toHaveBeenCalledTimes(text.length);
});
