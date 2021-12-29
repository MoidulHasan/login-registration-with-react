import React from "react";
import UserContextProvider from './contexts/UserContext';
import Home from "pages/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Pricing from "./pages/Pricing/Pricing";
import Dashboard from "./pages/Dashboard/Dashboard";

import 'bootstrap/dist/css/bootstrap.min.css';
import UserLogin from "pages/UserLogin/UserLogin";

function App() {
  return (
    <UserContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/userlogin" element={<UserLogin />} />
      </Routes>
    </Router>
    </UserContextProvider>
  );
}

export default App;
