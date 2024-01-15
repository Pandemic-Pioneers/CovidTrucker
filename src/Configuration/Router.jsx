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
        <Route path="/Prueba" element={<Prueba/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router