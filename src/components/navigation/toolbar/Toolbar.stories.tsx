import React from "react";
import Toolbar, { ToolbarProps } from "./Toolbar";
import { Story } from "@storybook/react/types-6-0";
import ToolbarItem from "../toolbar-item/ToolbarItem";

export default {
  title: "Navigation/Toolbar",
  component: Toolbar,
};

export const Default: Story<ToolbarProps> = (args) => (
  <Toolbar {...args}>
    <ToolbarItem title="Example" />
    <ToolbarItem title="Example" />
    <ToolbarItem title="Example" />
  </Toolbar>
);
Default.args = { loading: false };
