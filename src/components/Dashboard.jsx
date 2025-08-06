import React from 'react';
import SalesTable from './SalesTable';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>PetroBoard Dashboard</h1>

      {/* Sales Table Section */}
      <div style={{ marginTop: '30px' }}>
        <SalesTable />
      </div>
    </div>
  );
};

export default Dashboard;
