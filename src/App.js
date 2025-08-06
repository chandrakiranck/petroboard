import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import FuelSalesEntry from './FuelSalesEntry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/entry" element={<FuelSalesEntry />} />
      </Routes>
    </Router>
  );
}

export default App;