import React from 'react'
import './colordata.css'
import UseFetch from '../../Services/UseFetch'

const ColorData = () => {
  const urlTotalCases = "https://disease.sh/v3/covid-19/all";
  const {data, loading} = UseFetch(urlTotalCases);

  return (
    
    <div className='color_data_molecule'>
      
      {!loading ? <ColorData borderHoverColor = {'#FF0008'} bgColor = {"#FFF2F2"}  title={"Total Cases"} numColor={'#FF0008'} dayNum={"+ " + data.todayCases} totalValue={data.cases}/> : <p>Loading...</p >}
        {!loading ? <ColorData borderHoverColor = {'#FF6A07'} bgColor = {'#FFF9F1'}  title={"Active Cases"} numColor={'#FF6A07'} totalValue={data.active}/> : <p>Loading...</p>}
        {!loading ? <ColorData borderHoverColor = {'#82C519'} bgColor = {'#EDFFEC'}  title={"Recovered Cases"} numColor={'#82C519'} dayNum={"+ " + data.todayRecovered} totalValue={data.recovered}/> : <p>Loading...</p>}
        {!loading ? <ColorData borderHoverColor = {'#2C6DFF'} bgColor = {'#F4FCFF'}  title={"Deaths Cases"} numColor={'#2C6DFF'} dayNum={"+ " + data.todayDeaths} totalValue={data.deaths}/> : <p>Loading...</p>}
  
   </div>

  );
};


export default ColorData

// import React from 'react'
// import './colordata.css'


// const ColorData = () => {
//   return (
//     <>
//     <div className='colorData_Background'>
//       <h4 className='colorData_Text'>Total Case</h4>
//       <div className='colorData_NewCases'>
//         <p>+ New</p>
//       </div>
//       <h2 className='colorData_Numbers'> Numbers </h2>
//     </div>
   
//     </>
//   );
// }

// export default ColorData