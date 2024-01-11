import React from 'react';
import Top10Flags from '../../Top10Flags';
import "../atoms/Top10.css";

const Top10 = () => {
  return (
    <>
    <div className='Top10'>
        <h2 className='topCountries'>Top 10 Countries</h2>
    <Top10Flags />
    </div>
    </>
  )
};

export default Top10;

