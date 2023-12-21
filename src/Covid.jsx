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
    
    useEffect (() => {
        fetch("https://disease.sh/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_all")
        .then (res) => res.json();
        .then ((data) => {
            setData(data);
        });
    }
    );
    }

    const setData = ({
        country,
        cases,
        recovery,
        death,
        vaccine,
        current,
        newCases,
        newDeath,
    })





}

const Covid = () => {
  return (
    <div>Covid</div>
  )
}

export default Covid