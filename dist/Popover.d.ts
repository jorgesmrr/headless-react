import React, { CSSProperties } from "react";

interface Props {

    show: boolean;

    anchorElement: HTMLElement | null;

    onDismiss: Function;

}

interface State {

    iSListeningToClicks: boolean;

    isListeningToScroll: boolean;

    popoverStyle: CSSProperties;

    popoverWrapperStyle: CSSProperties;

}

declare class Popover extends React.Component<Props, State> {

    popoverRef: React.RefObject<HTMLDivElement>;

    clickHandler: (this: Window, ev: MouseEvent) => any;

    state: State;

    constructor(props: Props);

    hide(event: Event): void;

    onShowChanged(): void;

    startListeningClick(): void;

    stopListeningClick(): void;

    startListeningScroll(): void;

    stopListeningScroll(): void;

    scrollListener(event: Event): void;

    updateSuggestionsPositioning(): void;

    componentDidMount(): void;

    componentWillUnmount(): void;

    componentDidUpdate(nextProps: Props): void;

    render(): JSX.Element;

}

export default Popover;

