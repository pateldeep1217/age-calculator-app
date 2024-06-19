import React from 'react'

function AgeText({value, unit}) {
  return (
    <h1 className='text-[56px] lowercase tracking-tight'><span className='text-primary-purple'>{value}</span> {unit}</h1>
  )
}

export default AgeText