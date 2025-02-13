import { useState, useEffect } from "react";
import { auth, db } from "../firebase.js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import tickLightIcon from "../images/done.png";
import xIcon from "../images/multiply.png";
import tickIcon from "../images/done[1].png";
import xLightIcon from "../images/multiply[1].png";
import whatsappLogo from "../images/wappLogo.png";
import MPESALogo from "../images/MPESA.png";

const PricingPlan = () => {
  const [message, setMessage] = useState("");
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [mpesaPin, setMpesaPin] = useState("");
  const [userSubscription, setUserSubscription] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState("");

  // Open the custom payment dialog
  const openPaymentDialog = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentDialog(true);
  };

  // Process the payment once the user enters the MPesa PIN
  const processPayment = async () => {
    // (Simulated Daraja API call)
    // In a real-world scenario, you'd verify the mpesaPin with the Daraja API.
    if (mpesaPin.trim().length === 0) {
      setMessage("Please enter a valid MPesa PIN.");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        setMessage("Please log in to continue.");
        return;
      }

      // Compute expiry date based on plan type:
      // Daily Pass: 24 hours; Monthly & Premium: 30 days
      let expiryDate;
      if (selectedPlan.title === "Daily Pass") {
        expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
      } else {
        expiryDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
      }

      const subscriptionData = {
        userId: user.uid,
        userEmail: user.email,
        planTitle: selectedPlan.title,
        amount: selectedPlan.amount,
        expiry: expiryDate,
        createdAt: serverTimestamp(),
        status: "active",
      };

      // Record the subscription in Firestore
      const docRef = await addDoc(collection(db, "subscriptions"), subscriptionData);

      // Simulate sending an onboarding email
      console.log(`Onboarding email sent to ${user.email} for plan ${selectedPlan.title}`);

      setMessage(`Payment successful! You have subscribed to the ${selectedPlan.title}.`);
      setUserSubscription({ ...subscriptionData, id: docRef.id });

      // Close the payment dialog and reset the PIN input
      setShowPaymentDialog(false);
      setMpesaPin("");
      setSelectedPlan(null);
    } catch (error) {
      console.error("Error processing payment:", error);
      setMessage("An error occurred during payment. Please try again.");
    }
  };

  // Live countdown effect for subscription expiry
  useEffect(() => {
    if (!userSubscription || !userSubscription.expiry) return;

    const interval = setInterval(() => {
      const expiryDate = new Date(userSubscription.expiry);
      const now = new Date();
      const diff = expiryDate - now;

      if (diff <= 0) {
        setTimeRemaining("Plan Lapsed");
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        setTimeRemaining(`${days}d ${hours}h ${minutes}m`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [userSubscription]);

  return (
    <div className="pricing-plan-component">
      <h1>We've got a perfect plan - just for you!</h1>
      {message && <p className="confirm-message">{message}</p>}
      
      <div className="pricing-plans-container">
        {/* Daily Pass Card */}
        <div className="daily-pass-container">
          <div className="top">
            <h1>Daily Pass</h1>
            <p>
              KSH 150 <span>/per day</span>
            </p>
          </div>
          <div className="centre">
            <button className="cta-button" onClick={() => openPaymentDialog({ title: "Daily Pass", amount: 150 })}>
              Get Started
            </button>
            <Link style={{ textDecoration: "none" }} to="https://wa.me/254112529019" target="_blank">
              <button className="chat-button">
                <img src={whatsappLogo} alt="Whatsapp Logo" /> Get Assisted
              </button>
            </Link>
          </div>
          <div className="bottom">
            <h1>Features</h1>
            <p>
              <img src={tickIcon} alt="Tick Icon" />
              24/7 CCTV Surveillance
            </p>
            <p>
              <img src={tickIcon} alt="Tick Icon" />
              Real-Time Availability Check
            </p>
            <p>
              <img src={xIcon} alt="X Icon" />
              Reserved Slots
            </p>
            <p>
              <img src={xIcon} alt="X Icon" />
              Weather Protection
            </p>
            <p>
              <img src={xIcon} alt="X Icon" />
              Free Exterior Wash
            </p>
          </div>
        </div>
        {/* Monthly Pass Card */}
        <div className="monthly-pass-container">
          <div className="top">
            <h1>Monthly Pass</h1>
            <p>
              KSH 2500 <span>/per month</span>
            </p>
          </div>
          <div className="centre">
            <button className="cta-button" onClick={() => openPaymentDialog({ title: "Monthly Pass", amount: 2500 })}>
              Get Started
            </button>
            <Link style={{ textDecoration: "none" }} to="https://wa.me/254112529019" target="_blank">
              <button className="chat--button">
                <img src={whatsappLogo} alt="Whatsapp Logo" /> Get Assisted
              </button>
            </Link>
          </div>
          <div className="bottom">
            <h1>Features</h1>
            <p>
              <img src={tickLightIcon} alt="Tick Light Icon" />
              24/7 CCTV Surveillance
            </p>
            <p>
              <img src={tickLightIcon} alt="Tick Light Icon" />
              Real-Time Availability Check
            </p>
            <p>
              <img src={tickLightIcon} alt="Tick Light Icon" />
              Reserved Slots
            </p>
            <p>
              <img src={xLightIcon} alt="X Light Icon" />
              Weather Protection
            </p>
            <p>
              <img src={xLightIcon} alt="X Light Icon" />
              Free Exterior Wash
            </p>
          </div>
        </div>
        {/* Premium Pass Card */}
        <div className="daily-pass-container">
          <div className="top">
            <h1>Premium Pass ♛</h1>
            <p>
              KSH 3000 <span>/per month</span>
            </p>
          </div>
          <div className="centre">
            <button className="cta-button" onClick={() => openPaymentDialog({ title: "Premium Pass", amount: 3000 })}>
              Get Started
            </button>
            <Link style={{ textDecoration: "none" }} to="https://wa.me/254112529019" target="_blank">
              <button className="chat-button">
                <img src={whatsappLogo} alt="Whatsapp Logo" /> Get Assisted
              </button>
            </Link>
          </div>
          <div className="bottom">
            <h1>Features</h1>
            <p>
              <img src={tickIcon} alt="Tick Icon" />
              24/7 CCTV Surveillance
            </p>
            <p>
              <img src={tickIcon} alt="Tick Icon" />
              Real-Time Availability Check
            </p>
            <p>
              <img src={tickIcon} alt="Tick Icon" />
              Reserved Slots
            </p>
            <p>
              <img src={tickIcon} alt="Tick Icon" />
              Weather Protection
            </p>
            <p>
              <img src={tickIcon} alt="Tick Icon" />
              Free Exterior Wash
            </p>
          </div>
        </div>
         {/* Payment Dialog */}
      {showPaymentDialog && (
        <div className="payment-dialog-overlay">
          <div className="payment-dialog">
            <h2><img src={MPESALogo}/>LIPA NA MPESA</h2>
            <p>
              <strong>{selectedPlan.title}</strong> for KSH {selectedPlan.amount}
            </p>
            <p>
              <em>After payment, no refunds can happen.</em>
            </p>
            <label>
              Enter MPesa PIN:
              <input
                type="password"
                value={mpesaPin}
                onChange={(e) => setMpesaPin(e.target.value)}
              />
            </label>
            <div className="dialog-buttons">
              <button onClick={processPayment}>Pay</button>
              <button onClick={() => setShowPaymentDialog(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      </div>

     

      {/* User Subscription Details */}
      {userSubscription && (
        <div className="user-subscription">
          <h2>Your Subscription Details</h2>
          <p>
            <strong>Plan:</strong> {userSubscription.planTitle}
          </p>
          <p>
            <strong>Amount Paid:</strong> KSH {userSubscription.amount}
          </p>
          <p>
            <strong>Expires At:</strong>{" "}
            {new Date(userSubscription.expiry).toLocaleString()}
          </p>
          <p>
            <strong>Time Remaining:</strong> {timeRemaining}
          </p>
        </div>
      )}
    </div>
  );
};

export default PricingPlan;
