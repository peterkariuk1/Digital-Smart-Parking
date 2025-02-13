import person1 from "../images/person.png";
const Testimonials = () => {
  return (
    <div className="test-container">
      <h1>TESTIMONIALS: Here is what our Clients Say</h1>
      <div className="test-grid--container">
        <div className="test-grid-item">
          <div>
            <p>
              Knowing that my car is under 24/7 CCTV surveillance gives me peace
              of mind. I no longer have to worry about theft or damage. The
              Premium Pass was a great investment!
            </p>
          </div>
          <div className="test-bottom">
            <div>
                <img src={person1} />
            </div>
            <div>
                <p>Michael Brown</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
