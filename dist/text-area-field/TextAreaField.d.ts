import React from "react";

import { Field, FieldProps } from "../field/Field";

import { FieldWrapperProps } from "../field-wrapper/FieldWrapper";

interface TextAreaProps {

    type?: string;

    onChange?: Function;

}

export declare type TextAreaFieldProps = TextAreaProps & FieldProps & FieldWrapperProps;

declare class TextAreaField extends Field<TextAreaFieldProps> {

    static defaultProps: {

        type: string;

        autoCleanErrors: boolean;

    };

    onChange(event: React.FormEvent<HTMLTextAreaElement>): void;

    render(): JSX.Element;

}

export default TextAreaField;

