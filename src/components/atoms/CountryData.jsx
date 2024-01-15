import React from 'react';
import './countrydata.css';

const CountryData = ({ flag, countryName, totalValue }) => {
  return (
    <div className='countrydata_Background'>
      <div className='flag_image'></div>
      <p className='country_name'>{countryName}</p>
      <p className='country_number'>{totalValue}</p>
      <img className='flag_image' src={flag} alt={`Flag of ${countryName}`} />
    </div>
  );
};

export default CountryData;
