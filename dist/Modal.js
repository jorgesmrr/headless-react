import React from "react";

class Modal extends React.Component {

    dismiss() {

        if (this.props.onDismiss) {

            this.props.onDismiss();

        }

    }

    render() {

        return (React.createElement("div", { className: `modal ${this.props.show ? "open" : ""}` },

            React.createElement("div", { className: "modal-content" },

                React.createElement("div", { className: "card" },

                    React.createElement("div", { className: "card-block flex" },

                        React.createElement("span", { className: "card-title" }, this.props.title),

                        React.createElement("span", { className: "fas fa-times ml-auto cursor-pointer", onClick: () => this.dismiss() })),

                    this.props.children))));

    }

}

export default Modal;

