import React, { useState } from 'react';
import EditSaleModal from './EditSaleModal';

const SalesTable = () => {
  const [sales, setSales] = useState([
    {
      id: '1',
      date: '2025-08-06',
      fuelType: 'Petrol',
      litres: 20,
      amount: 2000,
      creditCustomer: '',
      dueDate: '',
    },
    {
      id: '2',
      date: '2025-08-06',
      fuelType: 'Diesel',
      litres: 15,
      amount: 1500,
      creditCustomer: 'ABC Corp',
      dueDate: '2025-08-10',
    },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

  const handleSaleUpdate = (updatedSale) => {
    setSales((prevSales) =>
      prevSales.map((sale) =>
        sale.id === updatedSale.id ? updatedSale : sale
      )
    );
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <h2>Sales Table</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Date</th>
            <th>Fuel Type</th>
            <th>Litres</th>
            <th>Amount</th>
            <th>Credit Customer</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.date}</td>
              <td>{sale.fuelType}</td>
              <td>{sale.litres}</td>
              <td>{sale.amount}</td>
              <td>{sale.creditCustomer || '-'}</td>
              <td>{sale.dueDate || '-'}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedSale(sale);
                    setIsEditModalOpen(true);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditModalOpen && selectedSale && (
        <EditSaleModal
          sale={selectedSale}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleSaleUpdate}
        />
      )}
    </div>
  );
};

export default SalesTable;
