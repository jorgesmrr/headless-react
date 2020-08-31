import React from "react";

export declare const RadioContext: React.Context<RadioContextProps>;

interface RadioContextProps {

    name: string;

    selectedValue?: any;

    onChange?: (ev: React.ChangeEvent<HTMLInputElement>, value: string | number | Object) => any;

}

interface RadioGroupProps {

    name: string;

    value?: any;

    onChange?: (value: any) => any;

}

declare class RadioGroup extends React.Component<RadioGroupProps> {

    handleOptionChange(ev: React.ChangeEvent<HTMLInputElement>, value: any): void;

    render(): JSX.Element;

}

export default RadioGroup;

