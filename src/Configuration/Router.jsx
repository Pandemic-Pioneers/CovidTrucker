import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/atoms/Navbar";
import Trackercero from "../components/organisms/Trackercero";
import React from 'react'
import Prueba from "../components/pages/HomePage/Prueba";
import Tracker_1 from "../components/pages/Tracker_1/tracker_1";

const Router = () => {
  return (
    <>
    <Navbar/>
    <Trackercero />
    <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Navbar/>}></Route> */}
        <Route path="/Prueba" element={<Prueba/>}></Route>
        <Route path="/tracker_1" element={<Tracker_1></Tracker_1>}></Route>
        <Route path="/trackercero" element={<Trackercero/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router