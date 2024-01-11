import React from 'react'
import './colordata.css'
import CovidData from '../../Covid'

const ColorData = () => {
  return (
    <>
    <div className='colorData_Background'>
      <h4 className='colorData_Text'>Total Case: </h4>

    </div>
    <CovidData />
    </>
  )
}

export default ColorData