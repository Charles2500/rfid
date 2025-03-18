const Devices = () => {
    return (
      <div className="p-5">
        <h1 className="text-2xl font-bold">Devices</h1>
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Device Name</th>
              <th className="border p-2">Department</th>
              <th className="border p-2">Device UID</th>
              <th className="border p-2">Date Added</th>
              <th className="border p-2">Mode</th>
              <th className="border p-2">Configuration</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample row */}
            <tr>
              <td className="border p-2">Device 1</td>
              <td className="border p-2">IT</td>
              <td className="border p-2">DEV123</td>
              <td className="border p-2">2025-03-18</td>
              <td className="border p-2">Active</td>
              <td className="border p-2">Default</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Devices;
  