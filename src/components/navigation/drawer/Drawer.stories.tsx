import React from "react";
import Drawer from "./Drawer";
import DrawerItem from "../drawer-item/DrawerItem";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Navigation/Drawer",
  component: Drawer,
  decorators: [withKnobs],
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
          <DrawerItem title="Item" />
        </Drawer>

        <button className="btn btn-primary" onClick={() => this.toggle()}>
          Show Drawer
        </button>
      </div>
    );
  }
}

export const Default = () => <Toggler />;
