import React from 'react'
import './trackercero.css'
import ColorData from '../atoms/ColorData'
import Top10 from '../atoms/Top10.jsx'

const Trackercero = () => {
  return(
    <>
    <div className='trackercero_background'>
    <h2 className='trackercero_Title'>COVID-19 Tracker</h2>
    
    <ColorData />
    <Top10 /></div>
    </>
  )}

export default Trackercero