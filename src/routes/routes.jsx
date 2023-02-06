import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/loginPage";
import MainPage from "../pages/Main/mainPage";
import Register from "../pages/Register/register";


function RoutsMap() {
  return (
    <Routes>
      <Route path="/" element={< LoginPage/>} />
      <Route path="/isLoged" element={< MainPage/>} />
      <Route path="/register" element={< Register/>} />
    </Routes>
  );
}
export default RoutsMap;