import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import SalesDashboard from "./components/SalesDashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";
import InventoryDashboard from "./components/InventoryDashboard";

function App() {
  return (
    <Router>
      <div style={styles.navbar}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/sales" style={styles.link}>Sales</Link>
        <Link to="/employees" style={styles.link}>Employees</Link>
        <Link to="/inventory" style={styles.link}>Inventory</Link>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sales" element={<SalesDashboard />} />
        <Route path="/employees" element={<EmployeeDashboard />} />
        <Route path="/inventory" element={<InventoryDashboard />} />
      </Routes>
    </Router>
  );
}

const styles = {
  navbar: {
    padding: "10px",
    backgroundColor: "#222",
    display: "flex",
    justifyContent: "space-around",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;
