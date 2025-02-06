import { useState } from "react";
import { auth, db } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate,Link } from "react-router-dom";
import "../styles/Login.css";
import starIcon from "../images/star.png";
import rightSVG from "../images/undraw_profile_details_re_ch9r.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      // Create a new user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save user info with a default role in Firestore
      await setDoc(doc(db, "users", user.uid), { email, role: "user" });

      alert("Signup successful!");
      navigate("/landing");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error during signup: " + error.message);
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
        <h2>Let Us get You Started!</h2>
        <p className="login-instruction">Sign up Today!</p>
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
        <button onClick={handleSignup} className="login-button">
          <p>Sign Up</p>
        </button>
        <p className="sign-up-instructions">
          Already have an account?<Link to="/login"> Login</Link>
        </p>
      </div>
      <div className="right-section">
        <img src={rightSVG} />
      </div>
    </div>
  );
};

export default SignUp;
