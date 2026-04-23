import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const adminPath = import.meta.env.VITE_ADMIN_PATH;

  const handleLogin = (e) => {
    e.preventDefault();
    if (login === "admin" && password === "superadmin") {
      localStorage.setItem("isAdminAuthenticated", "true");
      navigate(adminPath);
    } else {
      alert("Ошибка доступа!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-lg shadow-xl w-96"
      >
        <h2 className="text-white text-2xl mb-6 text-center">Admin Login</h2>
        <input
          type="text"
          placeholder="Login"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-gray-700 text-white rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
