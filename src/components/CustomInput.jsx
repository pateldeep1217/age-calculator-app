import { useState } from "react";

function CustomInput({ id, value, onChange }) {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChange(id, inputValue);
  };
  return (
    <input
      type="text"
      id={id} // Use the id prop to set the id attribute
      className="w-[87.67px] rounded-md border p-2 pl-2 pr-4 text-xl outline-none focus:border-primary-purple lg:w-[160px] lg:text-[2rem]"
      value={value}
      onChange={handleChange}
    />
  );
}

export default CustomInput;
