import React from 'react'
import './trackercero.css'
import ColorData from '../atoms/ColorData'
import CovidData from 'src/Covid.jsx'
import Top10 from '../atoms/Top10'

const Trackercero = () => {
  return(
    <>
    <div className='trackercero_background'>
    <h2 className='trackercero_Title'>COVID-19 Tracker</h2>
    <CovidData />
    <ColorData />
    <Top10 /></div>
    </>
  )}

export default Trackercero