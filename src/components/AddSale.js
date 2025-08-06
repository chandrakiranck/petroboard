import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddSale = () => {
  const [sale, setSale] = useState({
    date: '',
    fuelType: '',
    quantity: '',
    rate: '',
    isCredit: false,
    customerName: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSale({ ...sale, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalAmount = sale.quantity * sale.rate;
    await addDoc(collection(db, 'sales'), {
      ...sale,
      quantity: Number(sale.quantity),
      rate: Number(sale.rate),
      totalAmount,
      createdAt: new Date()
    });
    alert('Sale added');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" onChange={handleChange} required />
      <select name="fuelType" onChange={handleChange} required>
        <option value="">Select Fuel</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
      </select>
      <input type="number" name="quantity" placeholder="Litres" onChange={handleChange} required />
      <input type="number" name="rate" placeholder="Rate ₹" onChange={handleChange} required />
      <label>
        Credit? <input type="checkbox" name="isCredit" onChange={handleChange} />
      </label>
      {sale.isCredit && (
        <>
          <input type="text" name="customerName" placeholder="Customer Name" onChange={handleChange} />
          <input type="date" name="dueDate" onChange={handleChange} />
        </>
      )}
      <button type="submit">Add Sale</button>
    </form>
  );
};

export default AddSale;
