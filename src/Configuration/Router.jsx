import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trackercero from "../components/organisms/Trackercero";
import Prueba from "../components/pages/HomePage/Prueba";
import Tracker1 from "../components/pages/Tracker1/Tracker1"

const Router = () => {
  return (
    <>
    
    <Trackercero />
    <BrowserRouter>
    <Routes>
      <Route path="/tracker_1" element={<Tracker1 />}></Route>
      

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router