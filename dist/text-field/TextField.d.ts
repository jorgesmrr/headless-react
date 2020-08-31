import React from "react";

import { FieldWrapperProps } from "../field-wrapper/FieldWrapper";

import { Field, FieldProps } from "../field/Field";

interface TextProps extends FieldWrapperProps {

    type?: string;

    onChange?: Function;

}

export declare type TextFieldProps = TextProps & FieldProps & FieldWrapperProps;

declare class TextField extends Field<TextFieldProps> {

    static defaultProps: {

        type: string;

        autoCleanErrors: boolean;

    };

    onChange(event: React.FormEvent<HTMLInputElement>): void;

    render(): JSX.Element;

}

export default TextField;

