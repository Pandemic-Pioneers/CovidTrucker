import React from 'react'
import './trackercero.css'
import ColorDataMolecule from '../molecules/ColorDataMolecule'
import CountryDataMolecule from '../molecules/CountryDataMolecule.jsx'
import Colorcircle from '../atoms/Colorcircle.jsx'



const Trackercero = () => {
  return(
   
    <div className='trackercero_background'>
      <h2 className='trackercero_Title'>COVID-19 Tracker</h2> 
      <ColorDataMolecule/>
      <h2 className='trackercero_subtitle'>Top 10 country</h2>
      <CountryDataMolecule/>
      <Colorcircle/>
    </div>
  
  )}

export default Trackercero