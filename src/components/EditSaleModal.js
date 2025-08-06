import React, { useState } from 'react';
import Modal from 'react-modal';
import './SalesTable.css';

Modal.setAppElement('#root');

export default function EditSaleModal({ sale, onSave, onCancel }) {
  const [editedSale, setEditedSale] = useState(sale);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedSale((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedSale);
  };

  return (
    <Modal isOpen={true} onRequestClose={onCancel} className="modal" overlayClassName="overlay">
      <h2>Edit Sale</h2>
      <form onSubmit={handleSubmit}>
        <input name="date" value={editedSale.date} onChange={handleChange} placeholder="Date" />
        <input name="fuelType" value={editedSale.fuelType} onChange={handleChange} placeholder="Fuel Type" />
        <input name="litres" value={editedSale.litres} onChange={handleChange} placeholder="Litres" />
        <input name="amount" value={editedSale.amount} onChange={handleChange} placeholder="Amount" />
        <input name="creditCustomer" value={editedSale.creditCustomer} onChange={handleChange} placeholder="Credit Customer" />
        <input name="dueDate" value={editedSale.dueDate} onChange={handleChange} placeholder="Due Date" />

        <div className="modal-actions">
          <button type="submit" className="save-btn">Save</button>
          <button onClick={onCancel} className="cancel-btn">Cancel</button>
        </div>
      </form>
    </Modal>
  );
}
