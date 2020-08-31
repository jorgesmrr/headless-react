import React from "react";
import Popover from "./Popover";

export default {
  title: "Surface/Popover",
  componet: Popover,
};

class Toggler extends React.Component {
  private anchorRef = React.createRef<HTMLButtonElement>();

  state = { show: false };

  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="relative">
        <button
          className="btn btn-primary"
          ref={this.anchorRef}
          onClick={() => this.toggle()}
        >
          Show Popover
        </button>
        <Popover
          show={this.state.show}
          anchorElement={this.anchorRef.current}
          onDismiss={() => this.toggle}
        >
          Example
        </Popover>
      </div>
    );
  }
}

export const Default = () => <Toggler />;
