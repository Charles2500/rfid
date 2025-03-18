import { Routes, Route, Link } from "react-router-dom";
import Users from "./Users";
import ManageUsers from "./ManageUsers";
import UsersLog from "./UsersLog";
import Devices from "./Devices";
import Admin from "./Admin";
import Sidebar from "../components/Sidebar";  // ✅ Correct relative path


const Dashboard = () => {
    return (
      <div className="flex">

        <div className="p-5 flex-1">
          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="users-log" element={<UsersLog />} />
            <Route path="devices" element={<Devices />} />
            <Route path="admin" element={<Admin />} />
            <Route path="logout" element={<h1>Logging out...</h1>} />
          </Routes>
        </div>
      </div>
    );
  };
export default Dashboard;
