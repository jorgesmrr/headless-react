import React, { FunctionComponent } from "react";

export interface ToolbarItemProps {
  title: string;
  link?: string;
}

const ToolbarItem: FunctionComponent<ToolbarItemProps> = ({ title, link }) =>
  link ? (
    <a
      href={link}
      className="px-4 py-2 cursor-pointer hover:bg-neutral-1 rounded"
    >
      {title}
    </a>
  ) : (
    <span className="px-4 py-2 cursor-pointer hover:bg-neutral-1 rounded">
      {title}
    </span>
  );

export default ToolbarItem;
