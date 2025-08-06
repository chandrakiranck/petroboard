// src/components/Inventory.js
import React, { useState } from 'react';

const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Petrol', quantity: 2000, unit: 'litres' },
    { id: 2, name: 'Diesel', quantity: 1500, unit: 'litres' },
    { id: 3, name: '2T Oil', quantity: 40, unit: 'bottles' }
  ]);

  const [newItem, setNewItem] = useState({ name: '', quantity: '', unit: '' });

  const addItem = () => {
    if (!newItem.name || !newItem.quantity || !newItem.unit) return;
    setInventory([...inventory, { ...newItem, id: Date.now() }]);
    setNewItem({ name: '', quantity: '', unit: '' });
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Inventory</h2>
      <input
        type="text"
        placeholder="Item Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
      />
      <input
        type="text"
        placeholder="Unit (litres/bottles)"
        value={newItem.unit}
        onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
      />
      <button onClick={addItem}>Add</button>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>
                <button onClick={() => deleteItem(item.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
