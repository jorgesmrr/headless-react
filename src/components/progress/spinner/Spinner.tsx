import classNames from "classnames";
import React, { CSSProperties } from "react";

export interface SpinnerProps {
    inline?: boolean;
    small?: boolean;
    primaryColor?: string;
    secondaryColor?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
    inline,
    small,
    primaryColor,
    secondaryColor,
    children,
}) => {
    const className = classNames("spinner", {
        "spinner--inline": children || inline,
        "spinner--small": small,
    });

    const style = {
        "--spinner-primary-color": primaryColor || "black",
        "--spinner-secondary-color": secondaryColor || "grey",
    } as CSSProperties;

    return (
        <div className={className} style={style}>
            <div className="spinner__spin" />
            {children}
        </div>
    );
};

export default Spinner;
