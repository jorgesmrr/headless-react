import { Story } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import { DrawerProps } from "../../components/surface/drawer/Drawer";
import Modal from "../../components/surface/modal/Modal";

export default {
  title: "Surface/Modal",
  component: Modal,
};

const Toggler: React.FC<DrawerProps> = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="relative">
      <Modal show={show} onDismiss={toggle}>
        <div style={{ backgroundColor: "white" }}>Modal contents</div>
      </Modal>

      <button className="btn btn-primary" onClick={toggle}>
        Show modal
      </button>
    </div>
  );
};

const Template: Story<DrawerProps> = (args) => <Toggler {...args} />;

export const Default = Template.bind({});

export const CustomWidth = Template.bind({});
CustomWidth.args = { width: "45rem" };
