import React from 'react'
import './SymbolCases.css'

const SymbolCases = () => {
  return (
    <>
    <div className='symbolCases_background'>
        <div className='symbolIcon'><img src="../assets/images/icons/covid-blue.svg" alt="covid_blue"/></div>
        
        <div className='symbolInfo'>
        <h4 className='symbolCases_Text'>Total Cases</h4>
        <h3 className='symbolCases_Numbers'>Number</h3>
        </div>
    </div>
    
    </>
    
  );
}

export default SymbolCases