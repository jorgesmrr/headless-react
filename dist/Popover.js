import React from "react";

const SUGGESTIONS_WINDOW_MARGIN = 28;

class Popover extends React.Component {

    constructor(props) {

        super(props);

        this.popoverRef = React.createRef();

        this.clickHandler = this.hide.bind(this);

        this.state = {

            iSListeningToClicks: false,

            isListeningToScroll: false,

            popoverStyle: {

                position: "absolute",

                bottom: "auto",

                minWidth: "auto",

            },

            popoverWrapperStyle: {

                top: "auto",

                left: "auto",

                bottom: "auto",

            },

        };

    }

    hide(event) {

        var _a, _b;

        if (event.target instanceof Node &&

            !((_a = this.popoverRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) &&

            !((_b = this.props.anchorElement) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {

            this.props.onDismiss();

        }

    }

    onShowChanged() {

        if (this.props.show) {

            this.updateSuggestionsPositioning();

            if (!this.state.isListeningToScroll) {

                this.startListeningScroll();

            }

            if (!this.state.iSListeningToClicks) {

                setTimeout(() => this.startListeningClick());

            }

        }

        else {

            if (this.state.isListeningToScroll) {

                this.stopListeningScroll();

            }

            if (this.state.iSListeningToClicks) {

                this.stopListeningClick();

            }

        }

    }

    startListeningClick() {

        window.addEventListener("click", this.clickHandler);

    }

    stopListeningClick() {

        window.removeEventListener("click", this.clickHandler);

    }

    startListeningScroll() {

        document.addEventListener("scroll", this.scrollListener, {

            capture: true,

            passive: true,

        });

    }

    stopListeningScroll() {

        document.removeEventListener("scroll", this.scrollListener);

    }

    scrollListener(event) {

        if (event.target !== this.popoverRef.current) {

            this.updateSuggestionsPositioning();

        }

    }

    updateSuggestionsPositioning() {

        if (!this.props.anchorElement || !this.popoverRef.current)

            return;

        const anchorRect = this.props.anchorElement.getBoundingClientRect();

        const anchorHeight = this.props.anchorElement.offsetHeight;

        if (window.innerHeight - anchorRect.y < 200) {

            this.setState({

                popoverWrapperStyle: {

                    top: Math.max(anchorRect.y - 30 * 14, SUGGESTIONS_WINDOW_MARGIN) + "px",

                    bottom: window.innerHeight - anchorRect.y + "px",

                },

                popoverStyle: {

                    position: "absolute",

                    bottom: "0",

                },

            });

        }

        else {

            this.setState({

                popoverWrapperStyle: {

                    top: anchorRect.y + anchorHeight + "px",

                    bottom: Math.max(window.innerHeight - anchorRect.y - anchorHeight - 30 * 14, SUGGESTIONS_WINDOW_MARGIN) + "px",

                },

                popoverStyle: {

                    position: "static",

                    bottom: "auto",

                },

            });

        }

        if (anchorRect.x + this.popoverRef.current.offsetWidth >

            window.innerWidth) {

            this.setState({

                popoverWrapperStyle: {

                    left: anchorRect.x +

                        this.props.anchorElement.offsetWidth -

                        this.popoverRef.current.offsetWidth +

                        "px",

                },

            });

        }

        else {

            this.setState({

                popoverWrapperStyle: {

                    left: anchorRect.x + "px",

                },

            });

        }

        this.setState({

            popoverStyle: {

                minWidth: this.props.anchorElement.offsetWidth + "px",

            },

        });

    }

    componentDidMount() {

        if (this.props.show) {

            this.onShowChanged();

        }

    }

    componentWillUnmount() {

        window.removeEventListener("click", this.hide);

    }

    componentDidUpdate(nextProps) {

        if (nextProps.show !== this.props.show) {

            this.onShowChanged();

        }

    }

    render() {

        return (React.createElement("div", { className: "popover-wrapper", style: this.state.popoverWrapperStyle },

            React.createElement("div", { className: "popover", ref: this.popoverRef, style: this.state.popoverStyle }, this.props.children)));

    }

}

export default Popover;

