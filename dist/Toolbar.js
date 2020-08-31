import React from "react";

const Toolbar = ({ loading, children }) => {

    const content = loading ? React.createElement("div", null, "Please wait") : children;

    return (React.createElement("nav", { className: `flex items-center bg-white text-neutral-4 px-2 shadow-md ${loading ? "busy" : null}` }, content));

};

export default Toolbar;

