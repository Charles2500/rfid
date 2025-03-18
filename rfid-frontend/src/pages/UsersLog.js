import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";  // ✅ Correct relative path


const UsersLog = () => {
  return (
    <div className="flex">
      
      <div className="p-5 flex-1">
        <h1 className="text-2xl font-bold">Users Log</h1>
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Serial Number</th>
              <th className="border p-2">Card UID</th>
              <th className="border p-2">Device</th>
              <th className="border p-2">Department</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Time In</th>
              <th className="border p-2">Time Out</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample row */}
            <tr>
              <td className="border p-2">1</td>
              <td className="border p-2">John Doe</td>
              <td className="border p-2">123456</td>
              <td className="border p-2">ABC123</td>
              <td className="border p-2">Device 1</td>
              <td className="border p-2">IT</td>
              <td className="border p-2">2025-03-18</td>
              <td className="border p-2">08:00 AM</td>
              <td className="border p-2">05:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersLog;
