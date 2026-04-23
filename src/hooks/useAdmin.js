import { useState, useEffect } from "react";

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const status = localStorage.getItem("isAdmin") === "true";
      setIsAdmin(status);
      setLoading(false);
    };
    checkAuth();
  }, []);

  return { isAdmin, loading };
};
