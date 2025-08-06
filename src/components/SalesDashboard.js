import React, { useState } from 'react';
import AddSale from './AddSale';
import SalesTable from './SalesTable';

const SalesDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <h2>Fuel Sales Dashboard</h2>
      <AddSale />
      <SalesTable selectedDate={selectedDate} />
    </div>
  );
};

export default SalesDashboard;
