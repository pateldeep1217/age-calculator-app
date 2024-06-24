import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import IconButton from "./IconButton";
import ArrowIcon from "../../assets/icon-arrow.svg?react";

import schema from "./yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";

function Form({ setAge }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const calculateAge = (day, month, year) => {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get the last day of the previous month
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }
    return { years: ageYears, months: ageMonths, days: ageDays };
  };

  const onSubmit = (data) => {
    const { day, month, year } = data;

    const age = calculateAge(day, month, year);
    setAge(age);
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
            error={errors.day?.message}
          />
        </div>

        <div className="flex flex-col">
          <CustomInput
            id="month"
            name="month"
            placeholder="MM"
            register={register}
            error={errors.month?.message}
          />
        </div>

        <div className="flex flex-col">
          <CustomInput
            id="year"
            name="year"
            placeholder="YYYY"
            register={register}
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
