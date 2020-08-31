import React from "react";
import { Story } from "@storybook/react/types-6-0";
import ToolbarItem, {
  ToolbarItemProps,
} from "../../components/navigation/toolbar-item/ToolbarItem";

export default {
  title: "Navigation/ToolbarItem",
  component: ToolbarItem,
};

export const Default: Story<ToolbarItemProps> = (args) => (
  <ToolbarItem {...args} />
);
Default.args = { title: "Item" };
