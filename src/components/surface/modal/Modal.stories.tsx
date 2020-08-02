import React from "react";
import Modal from "./Modal";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Surface/Modal",
  component: Modal,
  decorators: [withKnobs],
};

class Toggler extends React.Component {
  state = { show: false };

  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="relative">
        <Modal
          show={this.state.show}
          title={text("title", "Title")}
          onDismiss={() => this.toggle}
        />

        <button className="btn btn-primary" onClick={() => this.toggle()}>
          Show Modal
        </button>
      </div>
    );
  }
}

export const Default = () => <Toggler />;
