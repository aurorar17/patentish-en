import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
