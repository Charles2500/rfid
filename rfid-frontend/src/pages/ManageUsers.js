import React, { useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, cardUID: "123456", name: "John Doe", gender: "Male", serialNo: "001", date: "2025-03-18", department: "IT" },
    { id: 2, cardUID: "654321", name: "Jane Smith", gender: "Female", serialNo: "002", date: "2025-03-18", department: "HR" }
  ]);
  
  const handleAddUser = () => {
    const newUser = { id: users.length + 1, cardUID: "", name: "", gender: "", serialNo: "", date: "", department: "" };
    setUsers([...users, newUser]);
  };

  const handleRemoveUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <button onClick={handleAddUser} className="mb-4 p-2 bg-blue-500 text-white rounded">Add User</button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Card UID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Serial No</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">{user.cardUID}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.gender}</td>
              <td className="border p-2">{user.serialNo}</td>
              <td className="border p-2">{user.date}</td>
              <td className="border p-2">{user.department}</td>
              <td className="border p-2">
                <button onClick={() => handleRemoveUser(user.id)} className="p-1 bg-red-500 text-white rounded">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
