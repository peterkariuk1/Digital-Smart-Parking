import tickLightIcon from "../images/done.png";
import xIcon from "../images/multiply.png";
import tickIcon from "../images/done[1].png";
import xLightIcon from "../images/multiply[1].png";
import whatsappLogo from "../images/wappLogo.png";

const PricingPlan = () => {
  return (
    <div className="pricing-plan-component">
      <h1>We've got a perfect plan- just for you!</h1>
      <div className="pricing-plans-container">
        <div className="daily-pass-container">
          <div className="top">
            <h1>Daily Pass</h1>
            <p>
              KSH 150 <span>/per day</span>
            </p>
          </div>
          <div className="centre">
            <button className="cta-button">Get Started</button>
            <button className="chat-button">
              <img src={whatsappLogo} /> Get Assisted
            </button>
          </div>
          <div className="bottom">
            <h1>Features</h1>
            <p>
              <img src={tickIcon} />
              24/7 CCTV Surveillance
            </p>
            <p>
              <img src={tickIcon} />
              Real-Time Availability Check
            </p>
            <p>
              <img src={xIcon} />
              Reserved Slots
            </p>
            <p>
              <img src={xIcon} />
              Weather Protection
            </p>
            <p>
              <img src={xIcon} />
              Free Exterior Wash
            </p>
          
          </div>
        </div>
        <div className="monthly-pass-container">
          <div className="top">
            <h1>Monthly Pass</h1>
            <p>
              KSH 2500 <span>/per month</span>
            </p>
          </div>
          <div className="centre">
            <button className="cta-button">Get Started</button>
            <button className="chat--button">
              <img src={whatsappLogo} /> Get Assisted
            </button>
          </div>
          <div className="bottom">
            <h1>Features</h1>
            <p>
              <img src={tickLightIcon} />
              24/7 CCTV Surveillance
            </p>
            <p>
              <img src={tickLightIcon} />
              Real-Time Availability Check
            </p>
            <p>
              <img src={tickLightIcon} />
              Reserved Slots
            </p>
            <p>
              <img src={xLightIcon} />
              Weather Protection
            </p>
            <p>
              <img src={xLightIcon} />
              Free Exterior Wash
            </p>
          </div>
        </div>
        <div className="daily-pass-container">
          <div className="top">
            <h1>Premium Pass ♛</h1>
            <p>
              KSH 3000 <span>/per month</span>
            </p>
          </div>
          <div className="centre">
            <button className="cta-button">Get Started</button>
            <button className="chat-button">
              <img src={whatsappLogo} /> Get Assisted
            </button>
          </div>
          <div className="bottom">
            <h1>Features</h1>
            <p>
              <img src={tickIcon} />
              24/7 CCTV Surveillance
            </p>
            <p>
              <img src={tickIcon} />
              Real-Time Availability Check
            </p>
            <p>
              <img src={tickIcon} />
              Reserved Slots
            </p>
            <p>
              <img src={tickIcon} />
              Weather Protection
            </p>
            <p>
              <img src={tickIcon} />
              Free Exterior Wash
            </p>
            
          </div>
        </div>

        {/* <div className="monthly-container"></div>
        <div className="monthly-premium-container"></div> */}
      </div>
    </div>
  );
};

export default PricingPlan;
