import React from "react";

function CustomInput({
  id,
  name,
  placeholder,
  register,
  required,
  validate,
  error,
}) {
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className={`pb-1 text-xs uppercase tracking-widest text-neutral-smokey-grey lg:text-sm ${error ? "text-primary-light-red" : "text-neutral-smokey-grey"}`}
        >
          {id}
        </label>
        <input
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          className={`w-[87.67px] rounded-md border ${error ? "border-primary-light-red focus:border-primary-light-red" : "border-neutral-light-grey"} p-2 pl-2 pr-4 text-xl outline-none focus:border-primary-purple lg:w-[160px] lg:text-[2rem]`}
          {...register(name, {
            required: required ? "This field is required" : false,
            validate: validate,
          })}
        />
      </div>
      {error && (
        <p className="w-20 pt-2 text-xs font-thin text-primary-light-red lg:w-40 lg:text-sm">
          {error}
        </p>
      )}
    </>
  );
}

export default CustomInput;
