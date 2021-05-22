import React from "react";

export const RadioContext = React.createContext<RadioContextProps>({
    name: "",
});

export interface RadioContextProps {
    name: string;
    selectedValue?: any;
    onChange?: (
        ev: React.ChangeEvent<HTMLInputElement>,
        value: string | number | Object
    ) => any;
}

export interface RadioGroupProps {
    name: string;
    value?: any;
    onChange?: (value: any) => any;
}

class RadioGroup extends React.Component<RadioGroupProps> {
    onOptionChange(ev: React.ChangeEvent<HTMLInputElement>, value: any) {
        if (ev.target.checked) {
            this.props.onChange?.(value);
        }
    }

    render() {
        return (
            <div>
                <RadioContext.Provider
                    value={{
                        selectedValue: this.props.value,
                        name: this.props.name,
                        onChange: (e, v) => this.onOptionChange(e, v),
                    }}
                >
                    {this.props.children}
                </RadioContext.Provider>
            </div>
        );
    }
}

export default RadioGroup;
