import React, { CSSProperties, FunctionComponent } from "react";

export interface DrawerProps {
    open: boolean;
    onClose: Function;
    width?: string;
    background?: string;
    shadow?: string;
    overlayOpacity?: number;
    zIndex?: number;
    animationDuration?: string;
    animationCurve?: string;
}

const Drawer: FunctionComponent<DrawerProps> = ({
    open,
    onClose,
    width = "16rem",
    background = "white",
    shadow = "none",
    overlayOpacity = 0.5,
    zIndex = 40,
    animationDuration = "150ms",
    animationCurve = "ease-in-out",
    children,
}) => {
    const style = {
        "--drawer-width": width,
        "--drawer-background": background,
        "--drawer-shadow": shadow,
        "--drawer-overlay-opacity": overlayOpacity,
        "--drawer-z-index": zIndex,
        "--drawer-overlay-z-index": zIndex,
        "--drawer-animation-duration": animationDuration,
        "--drawer-animation-curve": animationCurve,
    } as CSSProperties;

    return (
        <div style={style} className={`drawer ${open && "drawer--open"}`}>
            <div className="drawer__overlay" onClick={() => onClose()} />
            <div className="drawer__body">{children}</div>
        </div>
    );
};

export default Drawer;
