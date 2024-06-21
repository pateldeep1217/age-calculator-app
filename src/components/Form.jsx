import CustomInput from "./CustomInput";
import IconButton from "./IconButton";
import ArrowIcon from "../assets/icon-arrow.svg?react";
import { useEffect, useState } from "react";
import { object } from "prop-types";

function Form() {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (inputName, inputValue) => {
    setFormData({ ...formData, [inputName]: inputValue });
    setErrors({ ...errors, [inputName]: "" });
  };

  const validate = () => {
    const newErrors = {};

    const dayNum = parseInt(formData.day, 10);
    if (!formData.day) {
      newErrors.day = "This field is required";
    } else if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
      newErrors.day = "The day number must be between 1 and 31";
    }

    const monthNum = parseInt(formData.month, 10);
    if (!formData.month) {
      newErrors.month = "This field is required";
    } else if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      newErrors.month = "Month must be between 1 and 12";
    }

    const currentYear = new Date().getFullYear();
    const yearNum = parseInt(formData.year, 10);

    if (!formData.year) {
      newErrors.year = "This field is required";
    } else if (isNaN(yearNum) || yearNum > currentYear) {
      newErrors.year = "The year cannot be in the future";
    }

    return newErrors;
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form>
      <div className="flex justify-between gap-8 lg:justify-start">
        <div className="flex flex-col">
          <CustomInput
            id="day"
            value={formData.day}
            onChange={handleChange}
            error={errors.day}
          />
        </div>
        <div className="flex flex-col">
          <CustomInput
            id="month"
            value={formData.month}
            onChange={handleChange}
            error={errors.month}
          />
        </div>
        <div className="flex flex-col">
          <CustomInput
            id="year"
            value={formData.year}
            onChange={handleChange}
            error={errors.year}
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
