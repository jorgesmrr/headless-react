import React, { CSSProperties, FunctionComponent } from "react";

export interface DrawerProps {
    open: boolean;
    handleClose: Function;
    width?: string;
    background?: string;
}

const Drawer: FunctionComponent<DrawerProps> = ({
    open,
    handleClose,
    width,
    background,
    children,
}) => {
    const style = {
        "--drawer-width": width || "16rem",
        "--drawer-background": background || "white",
    } as CSSProperties;

    return (
        <div>
            {open && (
                <div
                    className="drawer__overlay"
                    onClick={() => handleClose()}
                />
            )}

            <div className={`drawer ${open && "drawer--open"}`} style={style}>
                {children}
            </div>
        </div>
    );
};

export default Drawer;
