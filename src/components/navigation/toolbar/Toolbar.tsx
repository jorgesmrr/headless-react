import React, { FunctionComponent } from "react";

export interface ToolbarProps {
  loading?: boolean;
}

const Toolbar: FunctionComponent<ToolbarProps> = ({ loading, children }) => {
  const content = loading ? <div>Please wait</div> : children;

  return (
    <nav
      className={`flex items-center bg-white text-neutral-4 px-2 shadow-md ${
        loading ? "busy" : null
      }`}
    >
      {content}
    </nav>
  );
};

export default Toolbar;
