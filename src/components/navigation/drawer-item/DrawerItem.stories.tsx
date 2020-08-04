import React from "react";
import DrawerItem from "./DrawerItem";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Navigation/DrawerItem",
  component: DrawerItem,
  decorators: [withKnobs],
};

export const Default = () => (
  <ul>
    <DrawerItem title={text("title", "Item")} />
  </ul>
);
