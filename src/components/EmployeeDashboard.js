import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import AddEmployeeModal from "./AddEmployeeModal";

const EmployeeDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeeSnapshot = await getDocs(collection(db, "employees"));
      const employeeList = employeeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEmployees(employeeList);
    };

    fetchEmployees();
  }, [isModalOpen]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "employees", id));
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div>
      <h2>Employee Management</h2>
      <button onClick={() => setIsModalOpen(true)}>Add Employee</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Shift</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.shift}</td>
              <td>{emp.status}</td>
              <td>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <AddEmployeeModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default EmployeeDashboard;
