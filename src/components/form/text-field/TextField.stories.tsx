import React from "react";
import TextField from "./TextField";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { getDefaultFieldData } from "../../../utils/stories/form";

export default {
  title: "Form/TextField",
  component: TextField,
  decorators: [withKnobs],
};

export const Default = () => {
  const { label, placeholder } = getDefaultFieldData();
  return <TextField label={label} placeholder={placeholder} />;
};

export const WithHint = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      hint={text("hint", "Be creative!")}
    />
  );
};

export const Invalid = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      error={boolean("error", true)}
    />
  );
};

export const InvalidWithMessage = () => {
  const { label, placeholder } = getDefaultFieldData();
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      error={text("error", "Required field")}
    />
  );
};

class BindindTest extends React.Component {
  state = {
    text: "Text",
  };

  render() {
    return (
      <div>
        <TextField
          label="Text"
          value={this.state.text}
          onChange={(ev: any) => this.setState({ text: ev.target.value })}
        />
        <p>Typed text: {this.state.text}</p>
      </div>
    );
  }
}

export const Binding = () => <BindindTest />;
