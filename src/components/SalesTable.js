import React, { useState } from 'react';
import EditSaleModal from './EditSaleModal';
import './SalesTable.css';

const initialSales = [
  {
    id: 1,
    date: '2025-08-06',
    fuelType: 'Petrol',
    litres: 20,
    amount: 2000,
    creditCustomer: '',
    dueDate: '',
  },
  {
    id: 2,
    date: '2025-08-06',
    fuelType: 'Diesel',
    litres: 15,
    amount: 1500,
    creditCustomer: 'ABC Corp',
    dueDate: '2025-08-10',
  },
];

export default function SalesTable() {
  const [sales, setSales] = useState(initialSales);
  const [editingSale, setEditingSale] = useState(null);

  const handleEdit = (sale) => {
    setEditingSale(sale);
  };

  const handleDelete = (id) => {
    setSales(sales.filter((sale) => sale.id !== id));
  };

  const handleSave = (updatedSale) => {
    setSales((prev) =>
      prev.map((sale) => (sale.id === updatedSale.id ? updatedSale : sale))
    );
    setEditingSale(null);
  };

  const handleAdd = () => {
    const newSale = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      fuelType: '',
      litres: '',
      amount: '',
      creditCustomer: '',
      dueDate: '',
    };
    setSales([...sales, newSale]);
    setEditingSale(newSale);
  };

  return (
    <div className="sales-container">
      <div className="header">
        <img src="/logo192.png" alt="Logo" className="logo" />
        <h1>PetroBoard Dashboard</h1>
      </div>

      <div className="tabs">
        <button className="tab active">Sales</button>
        <button className="tab">Employees</button>
        <button className="tab">Inventory</button>
      </div>

      <div className="sales-header">
        <h2>Sales Table</h2>
        <button className="add-btn" onClick={handleAdd}>+ Add Sale</button>
      </div>

      <table className="sales-table">
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
                <button onClick={() => handleEdit(sale)} className="edit-btn">Edit</button>
                <button onClick={() => handleDelete(sale.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingSale && (
        <EditSaleModal sale={editingSale} onSave={handleSave} onCancel={() => setEditingSale(null)} />
      )}
    </div>
  );
}
