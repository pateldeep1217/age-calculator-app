import CustomInput from "./CustomInput";
import IconButton from "./IconButton";
import ArrowIcon from "../assets/icon-arrow.svg?react";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleChange = (inputName, inputValue) => {
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log("pressed");
    console.log(formData.day);
    console.log(formData.month);
    console.log(formData.year);
  };

  return (
    <form>
      <div className="flex justify-between gap-8 lg:justify-start">
        <div className="flex flex-col">
          <label
            htmlFor="day"
            className="pb-1 text-xs uppercase tracking-widest text-neutral-smokey-grey lg:text-sm"
          >
            Day
          </label>
          <CustomInput id="day" value={formData.day} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="month"
            className="pb-1 text-xs uppercase tracking-widest text-neutral-smokey-grey lg:text-sm"
          >
            Month
          </label>
          <CustomInput
            id="month"
            value={formData.month}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="year"
            className="pb-1 text-xs uppercase tracking-widest text-neutral-smokey-grey lg:text-sm"
          >
            Year
          </label>
          <CustomInput
            id="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="relative my-8">
        <div className="flex justify-center lg:justify-end">
          <IconButton Icon={ArrowIcon} onClick={handleButtonClick} />
        </div>
        <div className="absolute top-8 z-0 w-full border-t border-neutral-light-grey"></div>
      </div>
    </form>
  );
}

export default Form;
