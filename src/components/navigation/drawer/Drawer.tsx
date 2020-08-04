import React, { FunctionComponent } from "react";

interface Props {
  open: boolean;
  handleClose: Function;
}

const Drawer: FunctionComponent<Props> = ({ open, handleClose, children }) => (
  <div>
    <div v-if="open" className="fixed inset-0" onClick={() => handleClose()} />

    <div
      className={`drawer ${open ? "open" : null}`}
      style={{ width: "250px" }}
    >
      <h4 className="px-4">Menu</h4>

      <ul>{children}</ul>
    </div>
  </div>
);

export default Drawer;
