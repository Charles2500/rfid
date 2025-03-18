const Users = () => {
    return (
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Serial Number</th>
              <th className="py-2 px-4 border">Gender</th>
              <th className="py-2 px-4 border">Card UID</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Device</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data, replace with dynamic content */}
            <tr>
              <td className="py-2 px-4 border">1</td>
              <td className="py-2 px-4 border">John Doe</td>
              <td className="py-2 px-4 border">12345</td>
              <td className="py-2 px-4 border">Male</td>
              <td className="py-2 px-4 border">ABCD1234</td>
              <td className="py-2 px-4 border">2025-03-18</td>
              <td className="py-2 px-4 border">Device 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Users;
  