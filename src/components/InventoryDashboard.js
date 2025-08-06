import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';

const InventoryDashboard = () => {
  const [inventory, setInventory] = useState([]);
  const [fuelType, setFuelType] = useState('');
  const [quantity, setQuantity] = useState('');

  const inventoryRef = collection(db, 'inventory');

  const fetchInventory = async () => {
    const data = await getDocs(inventoryRef);
    setInventory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleAdd = async () => {
    if (!fuelType || !quantity) return;
    await addDoc(inventoryRef, {
      fuelType,
      quantity: parseFloat(quantity),
      updatedAt: new Date(),
    });
    setFuelType('');
    setQuantity('');
    fetchInventory();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'inventory', id));
    fetchInventory();
  };

  const handleUpdate = async (id, updatedQty) => {
    await updateDoc(doc(db, 'inventory', id), {
      quantity: parseFloat(updatedQty),
      updatedAt: new Date(),
    });
    fetchInventory();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Inventory Dashboard</h2>

      <div>
        <input
          type="text"
          placeholder="Fuel Type"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity (Litres)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleAdd}>Add Inventory</button>
      </div>

      <table border="1" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Fuel Type</th>
            <th>Quantity</th>
            <th>Last Updated</th>
            <th>Update Qty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.fuelType}</td>
              <td>{item.quantity}</td>
              <td>{item.updatedAt?.toDate?.().toLocaleString?.() || '-'}</td>
              <td>
                <input
                  type="number"
                  defaultValue={item.quantity}
                  onBlur={(e) => handleUpdate(item.id, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryDashboard;
