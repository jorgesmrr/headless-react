import React from "react";

import { Field, FieldProps } from "../field/Field";

import { FieldWrapperProps } from "../field-wrapper/FieldWrapper";

interface SelectProps {

    value?: string | number;

    options: Array<string | number | Object>;

    valueKey?: string;

    labelKey?: string;

    onChange?: Function;

}

export declare type SelectFieldProps = SelectProps & FieldProps & FieldWrapperProps;

declare class SelectField extends Field<SelectFieldProps> {

    getItemFromValue(value: string | number): string | number | Object;

    getItemValue(item: any): string | number;

    getItemLabel(item: any): string;

    handleChange(event: React.ChangeEvent<HTMLSelectElement>): void;

    render(): JSX.Element;

}

export default SelectField;

