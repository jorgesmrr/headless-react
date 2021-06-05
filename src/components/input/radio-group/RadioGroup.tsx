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
  legend?: string;
  value?: any;
  onChange?: (value: any) => any;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  legend,
  value,
  onChange,
  children,
}) => {
  const onOptionChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
    value: any
  ) => {
    if (ev.target.checked) {
      onChange?.(value);
    }
  };

  return (
    <fieldset>
      {legend && <legend>{legend}</legend>}
      <RadioContext.Provider
        value={{
          selectedValue: value,
          name: name,
          onChange: onOptionChange,
        }}
      >
        {children}
      </RadioContext.Provider>
    </fieldset>
  );
};

export default RadioGroup;
