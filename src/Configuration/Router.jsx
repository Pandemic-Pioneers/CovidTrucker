import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/atoms/Navbar";
import Trackercero from "../components/organisms/Trackercero";
import React from 'react'

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/" element={<Trackercero/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router