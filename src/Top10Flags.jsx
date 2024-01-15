import React, { useEffect, useState } from 'react'
import UseFetch from './Services/UseFetch';
import CountryData from './components/atoms/CountryData';


function Top10Flags () {
    const [countriesData, setCountriesData] = useState ([]);
  const urlCountries = "https://disease.sh/v3/covid-19/countries/";
  const { data, loading } = UseFetch(urlCountries);
  const [countriesData, setCountriesData] = useState ([]);

    useEffect(() => {

      fetch('https://disease.sh/v3/covid-19/countries?sort=cases')
          .then(res => res.json())
          .then(data => {
            const top10Countries = data.slice(0, 10);
            setCountriesData(top10Countries);
          })
          .catch(error => {
            console.error('Error fetching countries data:', error);
          });
      }, []);


      if (data) {
        const top10Countries = data.slice().sort((a, b) => b.cases - a.cases).slice(0, 10);

        setCountriesData(top10Countries);

    }
}, [data]);

  return (
    <>
    <div className="CovidDataInfo"></div>
            <h2 className='topCountries'>Top 10 Countries</h2> 
            {countriesData.map((country) => (
              <div key={country.country} className='countryInfo'>
                <img src={country.countryInfo.flag} alt={country.country} />
                <p className='countryName'>Country: {country.country}</p>
                <p className='casesNumber'>Cases: {country.cases}</p>
              </div>
            ))}
    </>
        {countriesData.map(countryInfo => (
          <CountryData key={countryInfo.country} flag={countryInfo.countryInfo.flag} countryName={countryInfo.country} totalValue={countryInfo.cases} />
        ))}

 </>
  );

  }
  
  export default Top10Flags
  