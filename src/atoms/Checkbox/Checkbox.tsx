import { useState } from "react";
import "./checkbox.scss";

interface IProps {
  label: string;
  handleOnChange(label: string): void;
}

const Checkbox = ({ label, handleOnChange }: IProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleOnChange(label);
  };

  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
          data-testid="checkbox"
        />

        <span className="checkmark">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
