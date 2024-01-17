import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trackercero from "../components/organisms/Trackercero";
import Home from "../components/pages/HomePage/Home";
import Tracker1 from "../components/pages/Tracker1/Tracker1";

const Router = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tracker1" element={<><Trackercero /><Tracker1 /></>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router