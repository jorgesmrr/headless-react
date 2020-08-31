import React from "react";

export const RadioContext = React.createContext({

    name: "",

});

class RadioGroup extends React.Component {

    handleOptionChange(ev, value) {

        var _a, _b;

        if (ev.target.checked) {

            (_b = (_a = this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value);

        }

    }

    render() {

        return (React.createElement("div", null,

            React.createElement(RadioContext.Provider, { value: {

                    selectedValue: this.props.value,

                    name: this.props.name,

                    onChange: (e, v) => this.handleOptionChange(e, v),

                } }, this.props.children)));

    }

}

export default RadioGroup;

