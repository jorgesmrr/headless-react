import React from "react";

const Drawer = ({ open, handleClose, children }) => (React.createElement("div", null,

    React.createElement("div", { "v-if": "open", className: "fixed inset-0", onClick: () => handleClose() }),

    React.createElement("div", { className: `drawer ${open ? "open" : null}`, style: { width: "250px" } },

        React.createElement("h4", { className: "px-4" }, "Menu"),

        React.createElement("ul", null, children))));

export default Drawer;

