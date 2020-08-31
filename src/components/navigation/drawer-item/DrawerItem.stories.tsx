import React from "react";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Navigation/DrawerItem",
  component: DrawerItem,
};

export const Default: Story<DrawerItemProps> = (args) => (
  <ul>
    <DrawerItem {...args} />
  </ul>
);
Default.args = { title: "Item" };
