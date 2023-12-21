import React, { useEffect, useState } from 'react'
import "src\covid.css"

function CovidData(){
    const [country, setCountry] = useState("");
    const [cases, setCases] = useState("");
    const [recovery, setRecovery] = useState("");
    const [death, setDeath] = useState("");
    const [vaccine, setVaccine] = useState("");
    const [current, setCurrent] = useState(""); //total active
    const [newCases, setNewCases] = useState("");
    const [newDeath, setNewDeath] = useState("");
    
    useEffect(() => {
        fetch("https://disease.sh/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_all")
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const setData = ({
        country,
        cases,
        recovery,
        death,
        vaccine,
        current,
        newCases,
        newDeath,
    }) => {
      setCountry(country);
      setCases(cases);
      setRecovery(recovery);
      setDeath(death);
      setVaccine(vaccine);
      setCurrent(current);
      setNewCases(newCases);
      setNewDeath(newDeath);
    }
    //<input type="search"></input>
    return (
      <>
        <div className="CovidData">
          <h1>Covid 19 Tracker</h1>
          <div className="CovidDataInput">
          </div>
          <div className="CovidDataInfo">
            <p>Country name:{country}</p>
            <p>Cases:{cases}</p>
            <p>Recovered:{recovery}</p>
            <p>Deaths:{death}</p>
            <p>Vaccines:{vaccine}</p>
            <p>Current:{current}</p>
            <p>New cases:{newCases}</p>
            <p>New deaths:{newDeath}</p>
          </div>
        </div>
      </>
    );

}

export default CovidData

