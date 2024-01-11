
import React, { useEffect, useState } from 'react'

function Top10Flags () {
    const [countriesData, setCountriesData] = useState ([]);
  
    useEffect(() => {
        
      fetch('https://disease.sh/v3/covid-19/countries?sort=cases')
          .then(res => res.json())
          .then(data => {
            setData(data);
            const top10Countries = data.slice(0, 10);
            setCountriesData(top10Countries);
          })
          .catch(error => {
            console.error('Error fetching countries data:', error);
          });
      }, []);
  
  
  return (
    <>
    <div className="CovidDataInfo"></div>
            <h2 className='topCountries'>Top 10 Countries</h2> 
            {countriesData.map((country) => (
              <div key={country.country} className='countryInfo'>
                <img src={country.countryInfo.flag} alt={country.country} width="50" height="10"/>
                <p className='countryName'>Country: {country.country}</p>
                <p className='casesNumber'>Cases: {country.cases}</p>
              </div>
            ))}
    </>
  );
  
  }
  
  export default Top10Flags
  