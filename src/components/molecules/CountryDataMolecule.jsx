import React, { useEffect, useState } from 'react'
import UseFetch from '../../Services/UseFetch'
import CountryData from '../atoms/CountryData'


function CountryDataMolecule () {
  const urlCountries = "https://disease.sh/v3/covid-19/countries/";
  const { data, loading } = UseFetch(urlCountries);
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
  
  export default CountryDataMolecule
  
  // import React from 'react'
// import './countrydatamolecule.css'
// import CountryData from '../atoms/CountryData'

// const CountryDataMolecule = () => {
//   return (
//     <>
//      <div className='country_data_molecule'>
//         <CountryData/>
//         <CountryData/>
//         <CountryData/>
//         <CountryData/>
//         <CountryData/>
//         <CountryData/>
//         <CountryData/>
//         <CountryData/>
//         <CountryData/>
//         <CountryData/>
//     </div>
//     </>
   
//   )
// }

// export default CountryDataMolecule