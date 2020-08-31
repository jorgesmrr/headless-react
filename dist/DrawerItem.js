import React from "react";

const DrawerItem = ({ title, link }) => (React.createElement("li", { className: "drawer-item" },

    React.createElement("a", { className: "block px-4 py-2", href: link }, title)));

export default DrawerItem;

