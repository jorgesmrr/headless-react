import React from "react";
import Drawer from "../../components/navigation/drawer/Drawer";

export default {
  title: "Navigation/Drawer",
  component: Drawer,
};

class Toggler extends React.Component {
  state = { open: false };

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="relative">
        <Drawer open={this.state.open} handleClose={() => this.toggle()}>
          Content
        </Drawer>

        <button className="btn btn-primary" onClick={() => this.toggle()}>
          Show Drawer
        </button>
      </div>
    );
  }
}

export const Default = () => <Toggler />;
