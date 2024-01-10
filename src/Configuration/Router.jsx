import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/atoms/Navbar";
import Trackercero from "../components/organisms/Trackercero";
import React from 'react'
import Prueba from "../components/pages/HomePage/Prueba";

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>}></Route>
<<<<<<< HEAD
        <Route path="/tracker0" element={<Trackercero />}></Route>
=======
        <Route path="/Prueba" element={<Prueba/>}></Route>
>>>>>>> 12e8871061a324b427674e80d9ccf07c2fedaa90
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router