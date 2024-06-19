import React from 'react'
import AgeText from './AgeText'

function DisplayAge() {
  return (
    <div>
        <AgeText  value={30} unit="Years"/>
        <AgeText  value={30} unit="Months"/>
        <AgeText  value={30} unit="Days"/>

    </div>
  )
}

export default DisplayAge