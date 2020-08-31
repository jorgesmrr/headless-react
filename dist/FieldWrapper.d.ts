import React from "react";

export interface FieldWrapperProps {

    for?: string;

    label?: string;

    hint?: string;

    error?: string | boolean;

}

declare class FieldWrapper extends React.Component<FieldWrapperProps> {

    getFormattedLabel(): string;

    render(): JSX.Element;

}

export default FieldWrapper;

