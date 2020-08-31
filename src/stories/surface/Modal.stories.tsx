import React from "react";
import Modal from "../../components/surface/modal/Modal";

export default {
  title: "Surface/Modal",
  component: Modal,
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
          title="Title"
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
