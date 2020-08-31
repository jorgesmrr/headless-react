import React from "react";

interface Props {

    show: boolean;

    title: string;

    onDismiss: Function;

}

declare class Modal extends React.Component<Props> {

    dismiss(): void;

    render(): JSX.Element;

}

export default Modal;

