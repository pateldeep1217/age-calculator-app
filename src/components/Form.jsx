import CustomInput from "./CustomInput";
function Form() {
  return (
    <form className=" flex justify-between lg:justify-start gap-8">
      <div className="  flex flex-col">
        <label
          htmlFor="day"
          className=" text-neutral-smokey-grey text-xs lg:text-sm uppercase tracking-widest pb-1"
        >
          Day
        </label>
        <CustomInput />
      </div>

      <div className="   flex flex-col">
        <label
          htmlFor="day"
          className=" text-neutral-smokey-grey text-xs lg:text-sm uppercase tracking-widest pb-1"
        >
          Month
        </label>
        <CustomInput />
      </div>

      <div className="  flex flex-col ">
        <label
          htmlFor="day"
          className=" text-neutral-smokey-grey  text-xs lg:text-sm uppercase tracking-widest pb-1"
        >
          Year
        </label>
        <CustomInput />
      </div>
    </form>
  );
}

export default Form;
