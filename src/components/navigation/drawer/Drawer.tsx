import React, { FunctionComponent } from "react";

interface Props {
    open: boolean;
    handleClose: Function;
}

const Drawer: FunctionComponent<Props> = ({ open, handleClose, children }) => (
    <div>
        {open && (
            <div className="drawer-overlay" onClick={() => handleClose()} />
        )}

        <div className={`drawer ${open ? "open" : null}`}>
            <h4 className="px-4">Menu</h4>

            <ul>{children}</ul>
        </div>
    </div>
);

export default Drawer;
