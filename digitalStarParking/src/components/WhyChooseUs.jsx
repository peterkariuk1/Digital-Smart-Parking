import checkMarkIcon from "../images/checkmark.png";

const WhyChooseUs = () => {
  const wcuItems = [
    {
      wcuItemText: "Real-time Parking Availability",
    },
    {
      wcuItemText: "Fast & Secure Digital Payments",
    },
    {
      wcuItemText: "Smart Access Control",
    },
    {
      wcuItemText: "24/7 Security Monitoring",
    },
    {
      wcuItemText: "Seamless User Experience",
    }
  ];
  return (
    <div className="wcu-container">
      {/* wcu is equivalent to why choose us */}
      <div className="wcu-title-container">
        <h1> But Why Us?</h1>
      </div>
      <div className="wcu-content-container">
        <div className="left"></div>
        <div className="right">
          <div>
            {wcuItems.map((item, index) => (
              <div key={index} className="wcu-item-container">
                <div className="checkmark-container">
                  <img src={checkMarkIcon} />
                </div>
                <div className="wcu-item-text-container">
                  <p>{item.wcuItemText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
