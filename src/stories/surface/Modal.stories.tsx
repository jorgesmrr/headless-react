import React from "react";
import Modal from "../../components/surface/modal/Modal";

export default {
    title: "Surface/Modal",
    component: Modal,
};

class Toggler extends React.Component {
    state = { showDefault: false, showLarge: false };

    toggleDefault() {
        this.setState({ showDefault: !this.state.showDefault });
    }

    toggleLarge() {
        this.setState({ showLarge: !this.state.showLarge });
    }

    render() {
        return (
            <div className="relative">
                <Modal
                    show={this.state.showDefault}
                    onDismiss={() => this.toggleDefault()}
                >
                    <div style={{ backgroundColor: "white" }}>
                        Modal contents
                    </div>
                </Modal>

                <Modal
                    show={this.state.showLarge}
                    width="45rem"
                    onDismiss={() => this.toggleLarge()}
                >
                    <div style={{ backgroundColor: "white" }}>
                        Modal contents
                    </div>
                </Modal>

                <button
                    className="btn btn-primary"
                    onClick={() => this.toggleDefault()}
                >
                    Show default modal
                </button>

                <button
                    className="btn btn-primary"
                    onClick={() => this.toggleLarge()}
                >
                    Show large modal
                </button>
            </div>
        );
    }
}

export const Default = () => <Toggler />;
