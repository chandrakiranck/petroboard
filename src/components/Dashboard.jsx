import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css"; // Create this file for custom styles
import { db } from "../firebase"; // Make sure firebase.js exports 'db'
import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [daySales, setDaySales] = useState(0);
  const [monthSales, setMonthSales] = useState(0);
  const [creditCustomers, setCreditCustomers] = useState(0);
  const [inventory, setInventory] = useState([]);

  // Replace with actual Firebase collections
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Sample data fetch logic
        const salesSnapshot = await getDocs(collection(db, "sales"));
        let dayTotal = 0;
        let monthTotal = 0;
        salesSnapshot.forEach((doc) => {
          const data = doc.data();
          const saleDate = new Date(data.date);
          const today = new Date();
          if (
            saleDate.toDateString() === today.toDateString()
          ) {
            dayTotal += data.amount;
          }
          if (
            saleDate.getMonth() === today.getMonth() &&
            saleDate.getFullYear() === today.getFullYear()
          ) {
            monthTotal += data.amount;
          }
        });
        setDaySales(dayTotal);
        setMonthSales(monthTotal);

        // Mock values for now
        setCreditCustomers(23);
        setInventory([
          { item: "Petrol", quantity: "5200 L" },
          { item: "Diesel", quantity: "6900 L" },
          { item: "Oil Packs", quantity: "340 pcs" },
        ]);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">FuelVista Dashboard</h2>

      <div className="cards-row">
        <div className="dashboard-card">
          <h4>Today's Sales</h4>
          <p>₹{daySales.toLocaleString()}</p>
        </div>

        <div className="dashboard-card">
          <h4>Monthly Sales</h4>
          <p>₹{monthSales.toLocaleString()}</p>
        </div>

        <div className="dashboard-card">
          <h4>Credit Customers</h4>
          <p>{creditCustomers}</p>
        </div>
      </div>

      <div className="inventory-section">
        <h4>Inventory Status</h4>
        <ul>
          {inventory.map((item, index) => (
            <li key={index}>
              {item.item}: <strong>{item.quantity}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
