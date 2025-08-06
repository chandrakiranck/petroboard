import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddSale from "./components/AddSale";
import EditSaleModal from "./components/EditSaleModal";
import Inventory from "./components/Inventory";
import AddInventory from "./components/AddInventory";
import EditInventory from "./components/EditInventory";
import EmployeeManagement from "./components/EmployeeManagement"; // if added

function App() {
  const isAuthenticated = localStorage.getItem("authenticated") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
        
        {/* Sales Routes */}
        <Route path="/add-sale" element={isAuthenticated ? <AddSale /> : <Navigate to="/" />} />
        <Route path="/edit-sale/:id" element={isAuthenticated ? <EditSaleModal /> : <Navigate to="/" />} />

        {/* Inventory Routes */}
        <Route path="/inventory" element={isAuthenticated ? <Inventory /> : <Navigate to="/" />} />
        <Route path="/add-inventory" element={isAuthenticated ? <AddInventory /> : <Navigate to="/" />} />
        <Route path="/edit-inventory/:id" element={isAuthenticated ? <EditInventory /> : <Navigate to="/" />} />

        {/* Optional: Employee Management */}
        <Route path="/employees" element={isAuthenticated ? <EmployeeManagement /> : <Navigate to="/" />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
