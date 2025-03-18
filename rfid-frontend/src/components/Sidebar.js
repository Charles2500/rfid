import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 h-screen p-4 text-white">
      <h2 className="text-xl font-bold mb-4">RFID Attendance</h2>
      <ul>
        <li><Link to="/dashboard/users" className="block p-2 hover:bg-gray-700">Users</Link></li>
        <li><Link to="/dashboard/manage-users" className="block p-2 hover:bg-gray-700">Manage Users</Link></li>
        <li><Link to="/dashboard/users-log" className="block p-2 hover:bg-gray-700">Users Log</Link></li>
        <li><Link to="/dashboard/devices" className="block p-2 hover:bg-gray-700">Devices</Link></li>
        <li><Link to="/dashboard/admin" className="block p-2 hover:bg-gray-700">Admin</Link></li>
        <li><Link to="/" className="block p-2 text-red-400 hover:bg-gray-700">Log Out</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
