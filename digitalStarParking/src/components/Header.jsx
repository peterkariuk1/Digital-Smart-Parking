import starIcon from "../images/star.png";
import { Link } from "react-router-dom";
// import { Reservation } from "../pages/Reservation.jsx";
import { useAuth } from "./AuthContext";

const Header = () => {
  const { user } = useAuth();
  return (
    <nav>
      <div className="left">
        <p>
          Digital
          <img src={starIcon} />
          Parking
        </p>
      </div>
      <div className="right">
        <Link
          style={{ textDecoration: "none", color: "#f3f3f3" }}
          to={`/${user.uid}/home`}
        >
          Home
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#f3f3f3" }}
          to={`/${user.uid}/home`}
        >
          Book a Spot
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#f3f3f3" }}
          to={`/${user.uid}/contact`}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Header;
