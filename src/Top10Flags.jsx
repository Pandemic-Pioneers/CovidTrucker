import React, { useEffect, useState } from 'react'
import UseFetch from './Services/UseFetch';
import CountryData from './components/atoms/CountryData';


function Top10Flags () {
  const urlCountries = "https://disease.sh/v3/covid-19/countries/";
  const { data } = UseFetch(urlCountries);
  const [countriesData, setCountriesData] = useState ([]);
  
    useEffect(() => {
      if (data) {
        const top10Countries = data.slice().sort((a, b) => b.cases - a.cases).slice(0, 10);

        setCountriesData(top10Countries);
     
    }
}, [data]);
     
  return (
    <>
        {countriesData.map(countryInfo => (
          <CountryData key={countryInfo.country} flag={countryInfo.countryInfo.flag} countryName={countryInfo.country} totalValue={countryInfo.cases} />
        ))}

 </>
  );
  
  }
  
  export default Top10Flags
  