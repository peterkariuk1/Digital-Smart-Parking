import "../styles/Home.css";
import heroImage from "../images/llanding.jpg";
import Header from '../components/Header.jsx'

const Landing = () => {
  return (
    <section>
    <section className="landing-page">
      <Header/>
      <div className="left-hero-section">
        <h1>
          Seamless Parking at Your Fingertips – <br />
          <span>Smart, Fast & Secure!</span>
        </h1>
      </div>
      <div className="right-hero-section">
        <img src={heroImage} />
      </div>
    </section>
    {/* <Reservation/> */}
    </section>
  );
};

export default Landing;
