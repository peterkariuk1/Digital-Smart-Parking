import RightArrow from "../images/right-arrow.png";
import PayIcon from "../images/pay.png";
import ReserveIcon from "../images/reserve.png";
import ParkIcon from "../images/park.png";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import PricingPlan from "../components/PricingPlan.jsx";
import Testimonials from "../components/Testimonials.jsx";

const Reservation = () => {
  return (
    <div className="reservation-section">
      <div className="top">
        <h1>
          How It Works:
          <br /> Seamless Parking in 3 Easy Steps
        </h1>
        <div>
          <div className="step-1">
            <h2>
              Reserve <img src={ReserveIcon} />
            </h2>
            <p>
              Check real-time parking availability and book a spot instantly
            </p>
          </div>
          <img className="right-arrow-1" src={RightArrow} />
          <div className="step-2">
            <h2>
              Park
              <img src={ParkIcon} />
            </h2>
            <p>Arrive at your reserved spot and enjoy hassle-free parking</p>
          </div>
          <img className="right-arrow-2" src={RightArrow} />
          <div className="step-3">
            <h2>
              Pay <img src={PayIcon} />
            </h2>
            <p>Complete your cashless payment and exit smoothly</p>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <PricingPlan />
      <Testimonials />
    </div>
  );
};

export default Reservation;
