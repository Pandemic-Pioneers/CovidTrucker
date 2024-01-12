import React from 'react'
import './countrydata.css'

export const CountryData = ({flag, countryName, totalValue}) => {
  return (
    <>
    <div className='countrydata_Background'>
      <img className='flag_image' src={flag} />
      <p className='country_name'>{countryName}</p>
      <p className='country_number'>{totalValue}</p>
    </div>
    </>
  )
}

export default CountryData;