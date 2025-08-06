import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Sales: ₹12,400</p>
      <p>Credit Outstanding: ₹6,000</p>
      <Link to="/entry"><button>Enter New Sale</button></Link>
    </div>
  );
}

export default Dashboard;