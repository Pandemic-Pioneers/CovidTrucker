import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "../components/atoms/Navbar";
import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navbar/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router