import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

interface ModalProps {
  show: boolean;
  title: string;
  onDismiss: Function;
}

class Modal extends React.Component<ModalProps> {
  dismiss() {
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  }

  render() {
    let element = document.getElementById("modal-root");

    if (!element) {
      element = document.createElement("div");
      document.body.appendChild(element);
    }

    return ReactDOM.createPortal(
      <div className={`modal ${this.props.show ? "open" : ""}`}>
        <div className="modal-content">
          <div className="card">
            <div className="card-block flex">
              <span className="card-title">{this.props.title}</span>
              <span
                className="fas fa-times ml-auto cursor-pointer"
                onClick={() => this.dismiss()}
              />
            </div>

            {this.props.children}
          </div>
        </div>
      </div>,
      element
    );
  }
}

export default Modal;
