import "../styles/Home.css";
import heroImage from "../images/llanding.jpg";

const Landing = () => {
  return (
    <section className="landing-page">
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
  );
};

export default Landing;
