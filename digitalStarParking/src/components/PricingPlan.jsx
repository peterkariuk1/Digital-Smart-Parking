import { useState } from "react";
import { auth, db } from "../firebase.js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import tickLightIcon from "../images/done.png";
import xIcon from "../images/multiply.png";
import tickIcon from "../images/done[1].png";
import xLightIcon from "../images/multiply[1].png";
import whatsappLogo from "../images/wappLogo.png";

const PricingPlan = () => {
  const [message, setMessage] = useState("");

  // This function simulates payment processing, records the subscription,
  // and simulates sending an onboarding email.
  const handlePlanPayment = async (plan) => {
    // Warn the user that no refunds are possible
    const confirmed = window.confirm(
      "After payment, no refunds can happen. Do you wish to continue?"
    );
    if (!confirmed) return;

    try {
      const user = auth.currentUser;
      if (!user) {
        setMessage("Please log in to continue.");
        return;
      }

      let expiryDate;
      if (plan.title === "Daily Pass") {
        expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now
      } else {
        expiryDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days from now
      }

      // Simulate payment success (here we assume it always succeeds)
      const subscriptionData = {
        userId: user.uid,
        userEmail: user.email,
        planTitle: plan.title,
        amount: plan.amount,
        expiry: expiryDate,
        createdAt: serverTimestamp(),
        status: "active",
      };

      // Record the subscription in Firestore (collection: "subscriptions")
      await addDoc(collection(db, "subscriptions"), subscriptionData);

      // Simulate sending an onboarding email by logging to the console
      console.log(
        `Onboarding email sent to ${user.email} for plan ${plan.title}`
      );
      setMessage(
        `Payment successful! You have subscribed to the ${plan.title}.`
      );
    } catch (error) {
      console.error("Error processing payment:", error);
      setMessage("An error occurred during payment. Please try again.");
    }
  };
  return (
    <div className="pricing-plan-component">
      <h1>We've got a perfect plan- just for you!</h1>
      {message && <p className="message">{message}</p>}
      <div className="pricing-plans-container">
        <div className="daily-pass-container">
          <div className="top">
            <h1>Daily Pass</h1>
            <p>
              KSH 150 <span>/per day</span>
            </p>
          </div>
          <div className="centre">
            <button
              className="cta-button"
              onClick={() =>
                handlePlanPayment({ title: "Daily Pass", amount: 150 })
              }
            >
              Get Started
            </button>
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
            <button
              className="cta-button"
              onClick={() =>
                handlePlanPayment({ title: "Monthly Pass", amount: 2500 })
              }
            >
              Get Started
            </button>
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
            <button
              className="cta-button"
              onClick={() =>
                handlePlanPayment({ title: "Premium Pass", amount: 3000 })
              }
            >
              Get Started
            </button>
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
      </div>
    </div>
  );
};

export default PricingPlan;
