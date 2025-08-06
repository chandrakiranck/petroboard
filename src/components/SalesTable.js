import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import EditSaleModal from './EditSaleModal';

const SalesTable = ({ selectedDate }) => {
  const [sales, setSales] = useState([]);
  const [editSale, setEditSale] = useState(null);

  useEffect(() => {
    const fetchSales = async () => {
      const salesRef = collection(db, 'sales');
      const q = query(salesRef); // Add filters here later
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSales(data);
    };
    fetchSales();
  }, [selectedDate]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'sales', id));
    setSales(sales.filter(sale => sale.id !== id));
  };

  return (
    <div>
      <h3>Sales</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th><th>Fuel</th><th>Qty</th><th>Rate</th><th>Total</th><th>Credit</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.date}</td>
              <td>{sale.fuelType}</td>
              <td>{sale.quantity}</td>
              <td>₹{sale.rate}</td>
              <td>₹{sale.totalAmount}</td>
              <td>{sale.isCredit ? 'Yes' : 'No'}</td>
              <td>
                <button onClick={() => setEditSale(sale)}>Edit</button>
                <button onClick={() => handleDelete(sale.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editSale && <EditSaleModal sale={editSale} onClose={() => setEditSale(null)} />}
    </div>
  );
};

export default SalesTable;
