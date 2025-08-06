// src/components/Dashboard.js

import React, { useState } from "react";
import SalesTable from "./SalesTable";
import EmployeeDashboard from "./EmployeeDashboard";
import InventoryDashboard from "./InventoryDashboard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("sales");

  return (
    <div style={{ padding: "20px" }}>
      <h1>PetroBoard Dashboard</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("sales")}>Sales</button>
        <button onClick={() => setActiveTab("employees")}>Employees</button>
        <button onClick={() => setActiveTab("inventory")}>Inventory</button>
      </div>

      {activeTab === "sales" && (
        <>
          <h2>Sales Table</h2>
          <SalesTable />
        </>
      )}

      {activeTab === "employees" && (
        <>
          <h2>Employee Details</h2>
          <EmployeeDashboard />
        </>
      )}

      {activeTab === "inventory" && (
        <>
          <h2>Inventory Overview</h2>
          <InventoryDashboard />
        </>
      )}
    </div>
  );
};

export default Dashboard;
