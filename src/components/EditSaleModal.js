import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

function EditSaleModal({ isOpen, onClose, onSave, sale }) {
  const [editedSale, setEditedSale] = useState(sale || {});

  useEffect(() => {
    setEditedSale(sale || {});
  }, [sale]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedSale((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedSale);
    onClose();
  };

  return React.createElement(
    Modal,
    {
      isOpen: isOpen,
      onRequestClose: onClose,
      contentLabel: 'Edit Sale',
      ariaHideApp: false,
      className: 'modal',
      overlayClassName: 'modal-overlay',
    },
    React.createElement('h2', null, 'Edit Sale Entry'),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement('label', null,
        'Fuel Type:',
        React.createElement('input', {
          type: 'text',
          name: 'fuelType',
          value: editedSale.fuelType || '',
          onChange: handleChange,
          required: true
        })
      ),
      React.createElement('label', null,
        'Quantity (litres):',
        React.createElement('input', {
          type: 'number',
          name: 'quantity',
          value: editedSale.quantity || '',
          onChange: handleChange,
          required: true
        })
      ),
      React.createElement('label', null,
        'Amount (₹):',
        React.createElement('input', {
          type: 'number',
          name: 'amount',
          value: editedSale.amount || '',
          onChange: handleChange,
          required: true
        })
      ),
      React.createElement('label', null,
        'Sale Type:',
        React.createElement('select', {
          name: 'saleType',
          value: editedSale.saleType || 'Cash',
          onChange: handleChange
        },
          React.createElement('option', { value: 'Cash' }, 'Cash'),
          React.createElement('option', { value: 'Credit' }, 'Credit')
        )
      ),
      editedSale.saleType === 'Credit'
        ? [
            React.createElement('label', { key: 'customerLabel' },
              'Customer Name:',
              React.createElement('input', {
                type: 'text',
                name: 'customerName',
                value: editedSale.customerName || '',
                onChange: handleChange
              })
            ),
            React.createElement('label', { key: 'dueDateLabel' },
              'Due Date:',
              React.createElement('input', {
                type: 'date',
                name: 'dueDate',
                value: editedSale.dueDate || '',
                onChange: handleChange
              })
            )
          ]
        : null,
      React.createElement('div', { className: 'modal-actions' },
        React.createElement('button', { type: 'submit' }, 'Save'),
        React.createElement('button', { type: 'button', onClick: onClose }, 'Cancel')
      )
    )
  );
}

export default EditSaleModal;
