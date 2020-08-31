import React from "react";

const ToolbarItem = ({ title, link }) => link ? (React.createElement("a", { href: link, className: "px-4 py-2 cursor-pointer hover:bg-neutral-1 rounded" }, title)) : (React.createElement("span", { className: "px-4 py-2 cursor-pointer hover:bg-neutral-1 rounded" }, title));

export default ToolbarItem;

