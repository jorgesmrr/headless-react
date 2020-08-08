import React from "react";
import RadioField from "../radio-field/RadioField";

interface RadioGroupProps {
  value?: string | number | Object;
  options: Array<string | number | Object>;
  valueKey?: string;
  labelKey?: string;
  onChange?: Function;
}

class RadioGroup extends React.Component<RadioGroupProps> {
  getItemFromValue(value: string | number) {
    return this.props.options.find((o) => this.getItemValue(o) === value);
  }

  getItemValue(item: any): string | number {
    return this.props.valueKey ? item[this.props.valueKey] : item;
  }

  getItemLabel(item: any): string {
    return this.props.labelKey ? item[this.props.labelKey] : item;
  }

  handleOptionChange(
    ev: React.ChangeEvent<HTMLInputElement>,
    value: string | number
  ) {
    if (ev.target.checked) {
      this.props.onChange?.(this.getItemFromValue(value));
    }
  }

  render() {
    return (
      <div>
        {this.props.options.map((o) => {
          const optionValue = this.getItemValue(o);
          return (
            <RadioField
              key={optionValue}
              label={this.getItemLabel(o)}
              value={optionValue}
              checked={
                !!this.props.value &&
                this.getItemValue(this.props.value) === optionValue
              }
              onChange={(ev) => this.handleOptionChange(ev, optionValue)}
            />
          );
        })}
      </div>
    );
  }
}

export default RadioGroup;
