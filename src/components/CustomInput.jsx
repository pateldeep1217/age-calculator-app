import React from 'react';

function CustomInput({ id }) {
  return (
    <input
      type="text"
      id={id} // Use the id prop to set the id attribute
      className="border rounded-md p-2 focus:border outline-none pl-2 pr-4 w-[87.67px]"
    />
  );
}

export default CustomInput;
