import React from 'react'
import './colordatamolecule.css'
import ColorData from '../atoms/ColorData'
import UseFetch from '../../Services/UseFetch'

const ColorDataMolecule = () => {
    const urlTotalCases = "https://disease.sh/v3/covid-19/all";
    const {data, loading} = UseFetch(urlTotalCases);
};
export default ColorDataMolecule