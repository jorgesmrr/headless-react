import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextField from "../../../../components/input/text-field/TextField";

const textInputValue = "My text input value";
const textInputName = "my text input";

it("should have the correct value", async () => {
  const { getByRole } = render(
    <form name="my form">
      <TextField name={textInputName} value={textInputValue} />
    </form>
  );

  expect(getByRole("form")).toHaveFormValues({
    [textInputName]: textInputValue,
  });
});

it("should have error class", async () => {
  const { getByRole } = render(<TextField value={textInputValue} error />);

  expect(getByRole("textbox")).toHaveClass("text-field--error");
});

it("should have extra class", async () => {
  const extraClass = "some class";

  const { getByRole } = render(
    <TextField value={textInputValue} className={extraClass} />
  );

  expect(getByRole("textbox")).toHaveClass(extraClass);
});

it("should be disabled", async () => {
  const { getByRole } = render(<TextField value={textInputValue} disabled />);

  expect(getByRole("textbox")).toBeDisabled();
});

it("should be focused", async () => {
  const { getByRole } = render(<TextField value={textInputValue} autoFocus />);

  expect(getByRole("textbox")).toHaveFocus();
});

it("should emit changes", async () => {
  const onChange = jest.fn();
  const { getByRole } = render(
    <TextField value={textInputValue} onChange={onChange} />
  );

  const text = "some text";
  const textInput = getByRole("textbox");

  userEvent.type(textInput, text);

  expect(onChange).toHaveBeenCalledTimes(text.length);
});

it("should emit enter key press", async () => {
  const onEnter = jest.fn();
  const { getByRole } = render(
    <TextField value={textInputValue} onEnter={onEnter} />
  );

  const textInput = getByRole("textbox");
  userEvent.type(textInput, "some text{enter}");
  expect(onEnter).toHaveBeenCalledTimes(1);
});
