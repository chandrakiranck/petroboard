import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function FuelSalesEntry() {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'fuel_sales'), {
        product,
        quantity: parseFloat(quantity),
        amount: parseFloat(amount),
        createdAt: Timestamp.now()
      });
      alert("Entry saved!");
    } catch (e) {
      alert("Failed: " + e.message);
    }
  };

  return (
    <div>
      <h3>New Fuel Sale</h3>
      <input placeholder="Product (e.g., Petrol)" value={product} onChange={e => setProduct(e.target.value)} />
      <input placeholder="Quantity (litres)" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <input placeholder="Amount (₹)" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FuelSalesEntry;