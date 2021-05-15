import React from "react";
import ReactDOM from "react-dom";

export interface ModalProps {
    show: boolean;
    width?: string;
    onDismiss: () => void;
}

const Modal: React.FC<ModalProps> = ({
    show,
    width = "25rem",
    onDismiss,
    children,
}) => {
    const rootStyle = { "--modal-width": width } as React.CSSProperties;
    const handleClick = (event: any) => {
        if (
            event.target.classList.contains("modal") ||
            event.target.classList.contains("modal-content")
        ) {
            event.preventDefault();
            event.stopPropagation();
            onDismiss();
        }
    };

    let element = document.getElementById("modal-root");

    if (!element) {
        element = document.createElement("div");
        document.body.appendChild(element);
    }

    return ReactDOM.createPortal(
        <div
            className={`modal ${show ? "open" : ""}`}
            style={rootStyle}
            onClick={handleClick}
        >
            <div className="modal-content">{children}</div>
        </div>,
        element
    );
};

export default Modal;
