import CustomInput from "./CustomInput";
import IconButton from "./IconButton";
import ArrowIcon from "../assets/icon-arrow.svg?react";
function Form() {
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
          <CustomInput />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="day"
            className="pb-1 text-xs uppercase tracking-widest text-neutral-smokey-grey lg:text-sm"
          >
            Month
          </label>
          <CustomInput />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="day"
            className="pb-1 text-xs uppercase tracking-widest text-neutral-smokey-grey lg:text-sm"
          >
            Year
          </label>
          <CustomInput />
        </div>
      </div>

      <div className="relative my-8">
        <div className="flex justify-center lg:justify-end">
          <IconButton Icon={ArrowIcon} />
        </div>
        <div className="absolute top-8 z-0 w-full border-t border-neutral-light-grey"></div>
      </div>
    </form>
  );
}

export default Form;
