import React from "react";
import { Story } from "@storybook/react/types-6-0";
import ToolbarItem from "../../components/navigation/toolbar-item/ToolbarItem";
import Toolbar, {
  ToolbarProps,
} from "../../components/navigation/toolbar/Toolbar";

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
