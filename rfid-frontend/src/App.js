import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import ManageUsers from "./pages/ManageUsers";
import UsersLog from "./pages/UsersLog";
import Devices from "./pages/Devices";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { Outlet } from "react-router-dom"; // Import Outlet

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />
        
        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="users-log" element={<UsersLog />} />
          <Route path="devices" element={<Devices />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-4">
          {/* Instead of another <Routes>, use <Outlet> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
