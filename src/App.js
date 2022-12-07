import React from "react";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Login from "./Components/Login/Login.jsx";
import News from "./Components/News/News.jsx";
import Career from "./Components/Career/Career.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {useState();
  useEffect(() => {
    fetch("")
      .then((res) => res.json()).then().catch()
  });
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/News" element={  <News /> }/>
        <Route path="/Career" element={  <Career/> }/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
