import React from "react";

export interface CheckboxProps {

    id?: string;

    name?: string;

    label?: string;

    checked?: boolean;

    disabled?: boolean;

    onChange?: Function;

}

declare class CheckboxField extends React.Component<CheckboxProps> {

    render(): JSX.Element;

}

export default CheckboxField;

