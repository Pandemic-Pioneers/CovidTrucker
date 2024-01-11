import React from 'react'
import './colordata.css'
import CovidData from '../../Covid'

const ColorData = () => {
  return (
    <>
    <div className='colorData_Background'>
      <h4 className='colorData_Text'>Total Case</h4>
      <div className='colorData_NewCases'>
        <p>+ New</p>
      </div>
      <h2 className='colorData_Numbers'> Numbers </h2>

    </div>
    <CovidData />
    </>
  );
}

export default ColorData