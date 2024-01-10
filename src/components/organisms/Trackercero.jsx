import React from 'react'
import './trackercero.css'
import ColorData from '../atoms/ColorData'
import CovidData from '../../Covid'

const Trackercero = () => {
  return(
    <>
    <div className='trackercero_background'>
    <h2 className='trackercero_Title'>COVID-19 Tracker</h2>
    <CovidData />
   <ColorData/></div>
    </>
  )}

export default Trackercero