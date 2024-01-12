import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/atoms/Navbar";
import Trackercero from "../components/organisms/Trackercero";
import React from 'react'
import Trackeruno from "../components/organisms/Trackeruno";

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/" element={<Trackercero/>}></Route>
        <Route path="/trackeruno" element={<Trackeruno/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router