import React from "react";

export class Field extends React.Component {

    getInputClassName() {

        let classes = this.props.inputClassName

            ? this.props.inputClassName.split(" ")

            : [];

        if (this.props.error)

            classes.push("border-danger-2");

        return classes.join(" ");

    }

}

Field.defaultProps = {

    autoCleanErrors: true,

};

