// import { useState } from "react";
// import { auth, db } from "./firebase.js";
// import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/App.css";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Landing from "../pages/Landing.jsx";
import Reservation from "../pages/Reservation.jsx";
import Contact from "../pages/Contact.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

import { Route, Routes } from "react-router-dom";
import { useAuth } from "./AuthContext";
import AdminDashboard from "../pages/AdminDashboard.jsx";

const App = () => {
  const { user } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        {user && (
          <Route
            path={`/${user.uid}/home`}
            element={
              <ProtectedRoute>
                <Landing />
                <Reservation />
              </ProtectedRoute>
            }
          />
        )}
        {user && <Route path={`/${user.uid}/contact`} element={<Contact />} />}
        {user && <Route path={`/${user.uid}/admin`} element={<AdminDashboard />} />}
      </Routes>
    </>
  );
};

export default App;
