import { useEffect, useState } from "react";

function CustomInput({ id, value, onChange, error }) {
  useEffect(() => {
    if (error) {
      console.log(`Error ${id}: ${error}`);
    }
  }, [error]);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChange(id, inputValue);
  };

  // Determine placeholder based on id
  let placeholderText = "";
  if (id === "day") {
    placeholderText = "DD";
  } else if (id === "month") {
    placeholderText = "MM";
  } else if (id === "year") {
    placeholderText = "YYYY";
  }

  return (
    <>
      <label
        htmlFor={id}
        className={`pb-1 text-xs uppercase tracking-widest text-neutral-smokey-grey lg:text-sm ${error ? "text-primary-light-red" : "text-neutral-smokey-grey"}`}
      >
        {id}
      </label>
      <input
        type="text"
        id={id} // Use the id prop to set the id attribute
        className={`w-[87.67px] rounded-md border p-2 pl-2 pr-4 text-xl outline-none focus:border-primary-purple lg:w-[160px] lg:text-[2rem] ${error ? "border-primary-light-red" : "border-neutral-light-grey"}`}
        value={value}
        onChange={handleChange}
        placeholder={placeholderText}
      />

      {error && (
        <span className="mt-1 text-sm font-light text-primary-light-red lg:text-sm">
          {error}
        </span>
      )}
    </>
  );
}

export default CustomInput;
