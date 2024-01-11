import React from 'react';
import CovidData from "./"
import "../atoms/Top10.css";

const Top10 = () => {
  return (
    <>
    <div className='Top10'>
        <h2 className='topCountries'>Top 10 Countries</h2>
    <CovidData />
    </div>
    </>
  )
};

export default Top10;

