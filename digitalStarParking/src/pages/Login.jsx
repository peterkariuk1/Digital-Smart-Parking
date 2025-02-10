import { useState } from "react";
import { auth, db } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import starIcon from "../images/star.png";
import rightSVG from "../images/undraw_profile_details_re_ch9r.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Attempt to sign in the user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Retrieve user details (e.g., role) from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      // Redirect based on role
      if (userData.role === "admin") {
        navigate(`/${user.uid}/admin`)
      } else {
        navigate(`/${user.uid}/home`);
      }
    } catch (error) {
      console.log("Login error:", error);
      alert("Error during login: " + error.message);
    }
  };
  return (
    <div className="login-page">
      <div className="left-section">
        <h1>
          Digital
          <img src={starIcon} />
          Parking
        </h1>
        <h2>Welcome Back!</h2>
        <p className="login-instruction">Log in to your account</p>
        <div className="username-container">
          <p>Email</p>
          <input
            type="email"
            // placeholder=" Enter Email Adress"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-container">
          <p>Password</p>
          <input
            className="password-input"
            type="password"
            // placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin} className="login-button">
          <p>Log In</p>
        </button>
        <p className="sign-up-instructions">
          Dont have an account?<Link to="/sign-up"> Sign Up</Link>
        </p>
      </div>
      <div className="right-section">
        <img src={rightSVG} />
      </div>
    </div>
  );
};

export default Login;
