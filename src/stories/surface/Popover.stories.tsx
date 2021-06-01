import React, { useRef, useState } from "react";
import Popover from "../../components/surface/popover/Popover";

export default {
  title: "Surface/Popover",
  componet: Popover,
};

const Toggler: React.FC = () => {
  const anchorRef = useRef<HTMLButtonElement>(null);

  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <div className="relative">
      <button className="btn btn-primary" ref={anchorRef} onClick={toggle}>
        Show Popover
      </button>
      <Popover show={show} anchorElement={anchorRef.current} onDismiss={toggle}>
        Example
      </Popover>
    </div>
  );
};

export const Default = () => <Toggler />;
