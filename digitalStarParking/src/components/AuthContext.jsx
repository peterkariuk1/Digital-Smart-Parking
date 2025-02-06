import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";

// Create a context
const AuthContext = createContext();

// Provide authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

// Custom hook to access auth context
export const useAuth = () => {
  return useContext(AuthContext);
};