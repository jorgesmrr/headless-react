import { Story } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import Drawer, { DrawerProps } from "../../components/surface/drawer/Drawer";

export default {
  title: "Surface/Drawer",
  component: Drawer,
};

const Toggler: React.FC<DrawerProps> = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div>
      <Drawer {...props} open={open} onClose={toggle}>
        Content
      </Drawer>

      <button onClick={toggle}>Show Drawer</button>
    </div>
  );
};

export const Default: Story<DrawerProps> = (args) => <Toggler {...args} />;
Default.args = { background: "red", width: "5rem" };
