import React from 'react'

function AgeText({value, unit}) {
  return (
    <h1 className='text-[3.5rem] lowercase tracking-tight lg:text-[6.5rem] font-extrabold italic'><span className='text-primary-purple '>{value}</span> {unit}</h1>
  )
}

export default AgeText