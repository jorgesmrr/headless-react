import React from "react";
import ToolbarItem, { ToolbarItemProps } from "./ToolbarItem";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Navigation/ToolbarItem",
  component: ToolbarItem,
};

export const Default: Story<ToolbarItemProps> = (args) => (
  <ToolbarItem {...args} />
);
Default.args = { title: "Item" };
