import classNames from "classnames";
import React from "react";
import ReactDOM from "react-dom";

export interface ModalProps {
  show: boolean;
  width?: string;
  bodyDataTestId?: string;
  onDismiss: () => void;
}

const Modal: React.FC<ModalProps> = ({
  show,
  width = "25rem",
  bodyDataTestId,
  onDismiss,
  children,
}) => {
  const onClick = (event: any) => {
    if (
      event.target.classList.contains("modal") ||
      event.target.classList.contains("modal__content")
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

  const className = classNames("modal", { "modal--open": show });
  const rootStyle = { "--modal-width": width } as React.CSSProperties;

  return ReactDOM.createPortal(
    <div className={className} style={rootStyle} onClick={onClick}>
      <div className="modal__content" data-testid={bodyDataTestId}>
        {children}
      </div>
    </div>,
    element
  );
};

export default Modal;
