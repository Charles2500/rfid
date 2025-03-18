import React, { useState } from "react";

const Admin = () => {
  const [adminName, setAdminName] = useState("Admin");
  const [adminEmail, setAdminEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Update Your Account Info</h1>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Admin Name:</label>
        <input
          type="text"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Admin E-mail:</label>
        <input
          type="email"
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Password:</label>
        <input
          type="password"
          placeholder="Enter your Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Update Info
      </button>
    </div>
  );
};

export default Admin;
