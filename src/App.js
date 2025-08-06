import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import InventoryDashboard from './components/InventoryDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/inventory" element={user ? <InventoryDashboard /> : <Navigate to="/" />} />
        <Route path="/employees" element={user ? <EmployeeDashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
