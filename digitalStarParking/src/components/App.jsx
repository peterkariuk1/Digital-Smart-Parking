// import { useState } from "react";
// import { auth, db } from "./firebase.js";
// import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/App.css";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Landing from "../pages/Landing.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./AuthContext";

const App = () => {
  const { user } = useAuth(); // Get the logged-in user

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* Check if user exists before setting dynamic route */}
        {user && (
          <Route
            path={`/${user.uid}/home`}
            element={
              <ProtectedRoute>
                <Landing />
              </ProtectedRoute>
            }
          />
        )}
      </Routes>
    </>
  );
};

export default App;
