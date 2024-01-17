import React from 'react'
import './colordata.css'

const ColorData = ({borderHoverColor, bgColor, title, dayNum, numColor, totalValue}) => {
  const style1 = {
    backgroundColor: bgColor
  }
  const styleNum = {
    color: numColor
  }

  return (
    <>
    <div className='colorData_Background' 
    style={style1} 
    onMouseEnter={(e) => {e.currentTarget.style.border=`2px solid ${borderHoverColor}`}} 
    onMouseLeave={(e) => {e.currentTarget.style.border=`2px solid transparent`}}>

      <h4 className='colorData_Text'>{title}</h4>
      <div className='colorData_NewCases'>
        <p>{dayNum}</p>
      </div>
      <h2 className='colorData_Numbers' style={styleNum}>{totalValue}</h2>
    </div>
   
    </>
  );
};


export default ColorData