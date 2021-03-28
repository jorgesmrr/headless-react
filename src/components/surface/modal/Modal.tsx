import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    show: boolean;
    title: string;
    onDismiss: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, title, onDismiss, children }) => {
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
        <div className={`modal ${show ? "open" : ""}`} onClick={handleClick}>
            <div className="modal-content">
                <div className="card">
                    <div className="card-block flex">
                        <span className="card-title">{title}</span>
                        <span
                            className="fas fa-times ml-auto cursor-pointer"
                            onClick={onDismiss}
                        />
                    </div>

                    {children}
                </div>
            </div>
        </div>,
        element
    );
};

export default Modal;
