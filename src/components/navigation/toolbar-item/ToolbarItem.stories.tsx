import React from "react";
import ToolbarItem from "./ToolbarItem";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Navigation/ToolbarItem",
  component: ToolbarItem,
  decorators: [withKnobs],
};

export const Default = () => <ToolbarItem title={text("title", "Title")} />;
