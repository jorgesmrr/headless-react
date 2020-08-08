import React from "react";

interface Props {
  show: boolean;
  title: string;
  onDismiss: Function;
}

class Modal extends React.Component<Props> {
  dismiss() {
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  }

  render() {
    return (
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
      </div>
    );
  }
}

export default Modal;