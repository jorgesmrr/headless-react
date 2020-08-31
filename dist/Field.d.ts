import React from "react";

export interface FieldProps {

    id?: string;

    name?: string;

    disabled?: boolean;

    placeholder?: string;

    inputClassName?: string;

    value?: string | number | readonly string[];

    autoCleanErrors?: boolean;

    error?: string | boolean;

}

export declare class Field<T extends FieldProps> extends React.Component<T> {

    static defaultProps: {

        autoCleanErrors: boolean;

    };

    getInputClassName(): string;

}

