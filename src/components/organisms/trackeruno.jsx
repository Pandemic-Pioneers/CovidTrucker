import React from 'react'
import './trackeruno.css'
import SymbolCasesMolecule from '../molecules/SymbolCasesaMolecule'
import CovidData from '../../Covid'

const Trackeruno = () => {
  return (
    <>
    <div className='trackeruno_background'>
        <div className='trackeruno_Search'>
            <p> search</p>
        </div>
        <div className='trackeruno_Date'>
            <p>january</p>
        </div>
        <div className='trackeruno_ImageMap'>
            <img src="../assets/images/image_map.PNG" alt="imageMap" />
        </div>

        <div className='SymbolCasesMolecule'></div>

        <SymbolCasesMolecule />
        <CovidData />
    </div>
    </>
    
  );
}

export default Trackeruno