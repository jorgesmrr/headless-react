import React from "react";

export interface RadioProps {

    id?: string;

    label?: string;

    value: any;

    disabled?: boolean;

}

declare class RadioField extends React.Component<RadioProps> {

    render(): JSX.Element;

}

export default RadioField;

