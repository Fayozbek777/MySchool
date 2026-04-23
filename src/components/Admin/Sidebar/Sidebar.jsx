import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const adminPath = import.meta.env.VITE_ADMIN_PATH;

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/");
  };

  const menuItems = [
    { name: "Dashboard", path: adminPath },
    { name: "Courses", path: `${adminPath}/courses` },
    { name: "Teachers", path: `${adminPath}/teachers` },
    { name: "Reviews", path: `${adminPath}/reviews` },
    { name: "Settings", path: `${adminPath}/settings` },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white p-6 min-h-screen">
      <h2 className="text-xl font-bold mb-8 text-blue-400 uppercase tracking-widest">
        School Admin
      </h2>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => navigate(item.path)}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            {item.name}
          </div>
        ))}
        <button
          onClick={handleLogout}
          className="w-full text-left text-red-400 mt-10 hover:text-red-300"
        >
          Log Out
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
