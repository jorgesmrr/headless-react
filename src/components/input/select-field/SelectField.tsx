import classNames from "classnames";
import React from "react";

export interface SelectFieldProps {
  value: string | number | null;
  options: Array<string | number | Object>;
  valueKey?: string;
  labelKey?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  dataTestId?: string;
  onChange?: Function;
}

const SelectField: React.FC<SelectFieldProps> = ({
  value,
  options,
  valueKey,
  labelKey,
  id,
  name,
  placeholder,
  disabled,
  error,
  className,
  dataTestId,
  onChange,
}) => {
  const getItemFromValue = (value: string | number) => {
    return options.find((o) => getItemValue(o).toString() === value);
  };

  const getItemValue = (item: any): string | number => {
    return valueKey ? item[valueKey] : item;
  };

  const getItemLabel = (item: any): string => {
    return labelKey ? item[labelKey] : item;
  };

  const onChangeWrapper = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(getItemFromValue(event.target.value));
  };

  let computedClassName = classNames("select-field", className, {
    "select-field--error": error,
  });

  return (
    <select
      id={id}
      name={name}
      placeholder={placeholder}
      className={computedClassName}
      disabled={disabled}
      value={value || ""}
      data-testid={dataTestId}
      onChange={onChangeWrapper}
    >
      <option value="" disabled hidden={!placeholder}>
        {placeholder}
      </option>

      {options?.map((i) => {
        const value = getItemValue(i);

        return (
          <option key={value} value={value}>
            {getItemLabel(i)}
          </option>
        );
      })}
    </select>
  );
};

export default SelectField;
