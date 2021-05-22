import React, { CSSProperties } from "react";

export interface PopoverProps {
    show: boolean;
    anchorElement: HTMLElement | null;
    onDismiss: Function;
}

export interface PopoverState {
    iSListeningToClicks: boolean;
    isListeningToScroll: boolean;
    popoverStyle: CSSProperties;
    popoverWrapperStyle: CSSProperties;
}

const SUGGESTIONS_WINDOW_MARGIN = 28;

class Popover extends React.Component<PopoverProps, PopoverState> {
    popoverRef: React.RefObject<HTMLDivElement>;
    onClick: (this: Window, ev: MouseEvent) => any;
    state: PopoverState;

    constructor(props: PopoverProps) {
        super(props);

        this.popoverRef = React.createRef<HTMLDivElement>();
        this.onClick = this.hide.bind(this);

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

    hide(event: Event) {
        if (
            event.target instanceof Node &&
            !this.popoverRef.current?.contains(event.target) &&
            !this.props.anchorElement?.contains(event.target)
        ) {
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
        } else {
            if (this.state.isListeningToScroll) {
                this.stopListeningScroll();
            }
            if (this.state.iSListeningToClicks) {
                this.stopListeningClick();
            }
            this.setState({
                ...this.state,
                popoverWrapperStyle: { visibility: "hidden" },
            });
        }
    }

    startListeningClick() {
        window.addEventListener("click", this.onClick);
    }

    stopListeningClick() {
        window.removeEventListener("click", this.onClick);
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

    scrollListener(event: Event) {
        if (event.target !== this.popoverRef.current) {
            this.updateSuggestionsPositioning();
        }
    }

    updateSuggestionsPositioning() {
        if (!this.props.anchorElement || !this.popoverRef.current) return;

        const anchorRect = this.props.anchorElement.getBoundingClientRect();
        const anchorHeight = this.props.anchorElement.offsetHeight;

        if (window.innerHeight - anchorRect.y < 200) {
            this.setState({
                popoverWrapperStyle: {
                    top:
                        Math.max(
                            anchorRect.y - 30 * 14,
                            SUGGESTIONS_WINDOW_MARGIN
                        ) + "px",
                    bottom: window.innerHeight - anchorRect.y + "px",
                },
                popoverStyle: {
                    position: "absolute",
                    bottom: "0",
                },
            });
        } else {
            this.setState({
                popoverWrapperStyle: {
                    top: anchorRect.y + anchorHeight + "px",
                    bottom:
                        Math.max(
                            window.innerHeight -
                                anchorRect.y -
                                anchorHeight -
                                30 * 14,
                            SUGGESTIONS_WINDOW_MARGIN
                        ) + "px",
                },
                popoverStyle: {
                    position: "static",
                    bottom: "auto",
                },
            });
        }

        if (
            anchorRect.x + this.popoverRef.current.offsetWidth >
            window.innerWidth
        ) {
            this.setState({
                popoverWrapperStyle: {
                    left:
                        anchorRect.x +
                        this.props.anchorElement.offsetWidth -
                        this.popoverRef.current.offsetWidth +
                        "px",
                },
            });
        } else {
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
        this.stopListeningClick();
        this.stopListeningScroll();
    }

    componentDidUpdate(prevProps: PopoverProps) {
        if (prevProps.show !== this.props.show) {
            this.onShowChanged();
        }
    }

    render() {
        return (
            <div
                className="popover-wrapper"
                style={this.state.popoverWrapperStyle}
            >
                <div
                    className="popover"
                    ref={this.popoverRef}
                    style={this.state.popoverStyle}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Popover;
