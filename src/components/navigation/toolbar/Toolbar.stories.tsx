import React from "react";
import Toolbar from "./Toolbar";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import ToolbarItem from "../toolbar-item/ToolbarItem";

export default {
  title: "Navigation/Toolbar",
  component: Toolbar,
  decorators: [withKnobs],
};

export const Default = () => (
  <Toolbar loading={boolean("loading", false)}>
    <ToolbarItem title="Example" />
    <ToolbarItem title="Example" />
    <ToolbarItem title="Example" />
  </Toolbar>
);
