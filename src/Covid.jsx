import React, { useEffect, useState } from 'react'
import "./covid.css"

function CovidData(){
    const [countries, setCountry] = useState("");
    const [cases, setCases] = useState("");
    const [recovered, setRecovery] = useState("");
    const [deaths, setDeath] = useState("");
    const [tests, setVaccine] = useState("");
    const [active, setCurrent] = useState(""); //total active
    const [todayCases, setNewCases] = useState("");
    const [todayDeaths, setNewDeath] = useState("");
    const [countriesData, setCountriesData] = useState ([]);
    
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

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
    

     

    const setData = ({
        countries,
        cases,
        recovered,
        deaths,
        tests,
        active,
        todayCases,
        todayDeaths,
    }) => {
      setCountry(countries);
      setCases(cases);
      setRecovery(recovered);
      setDeath(deaths);
      setVaccine(tests);
      setCurrent(active);
      setNewCases(todayCases);
      setNewDeath(todayDeaths);
    }
    return (
      <>
        <div className="CovidData">
          <h1 className='trackerName'>Covid 19 Tracker</h1>
          <div className="CovidDataInput">
            <input type="search"></input>
          </div>
          <div className="CovidDataInfo">
            <p>Cases: {cases}</p>
            <p>Recovered: {recovered}</p>
            <p>Deaths: {deaths}</p>
            <p>Vaccines: {tests}</p>
            <p>Current: {active}</p>
            <p>New cases: {todayCases}</p>
            <p>New deaths: {todayDeaths}</p>
          </div>
          
          <div className="CovidDataInfo"></div>
          <h2 className='topCountries'>Top 10 Countries</h2> 
          {countriesData.map((country) => (
            <div key={country.country} className='countryInfo'>
              <p className='countryName'>Country: {country.country}</p>
              <p className='casesNumber'>Cases: {country.cases}</p>
            </div>
          ))}
        </div>
      </>
    );

}

export default CovidData

