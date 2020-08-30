import React, { FunctionComponent } from "react";

interface Props {
  loading?: boolean;
}

const Toolbar: FunctionComponent<Props> = ({ loading, children }) => {
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
