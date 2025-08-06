// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SalesDashboard from "./components/SalesDashboard";
import Inventory from "./components/Inventory";
import EmployeeDashboard from "./components/EmployeeDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sales" element={<SalesDashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/employees" element={<EmployeeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
