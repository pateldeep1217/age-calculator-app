import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import IconButton from "./IconButton";
import ArrowIcon from "../assets/icon-arrow.svg?react";
import {
  validateDay,
  validateMonth,
  validateYear,
} from "../utils/validationUtils";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between gap-8 lg:justify-start">
        <div className="flex flex-col">
          <CustomInput
            id="day"
            name="day"
            placeholder="DD"
            register={register}
            validate={(value) => validateDay(value, getValues)}
            required
            error={errors.day?.message}
          />
        </div>

        <div className="flex flex-col">
          <CustomInput
            id="month"
            name="month"
            placeholder="MM"
            register={register}
            validate={validateMonth}
            required
            error={errors.month?.message}
          />
        </div>

        <div className="flex flex-col">
          <CustomInput
            id="year"
            name="year"
            placeholder="YYYY"
            register={register}
            validate={validateYear}
            required
            error={errors.year?.message}
          />
        </div>
      </div>

      <div className="relative my-8">
        <div className="flex justify-center lg:justify-end">
          <IconButton Icon={ArrowIcon} type="submit" />
        </div>
        <div className="absolute top-8 z-0 w-full border-t border-neutral-light-grey"></div>
      </div>
    </form>
  );
}

export default Form;
