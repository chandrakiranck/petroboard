import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddEmployeeModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    shift: "",
    status: "active"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "employees"), formData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Employee</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="text" name="role" placeholder="Role" onChange={handleChange} required />
          <input type="text" name="shift" placeholder="Shift" onChange={handleChange} required />
          <select name="status" onChange={handleChange} value={formData.status}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
