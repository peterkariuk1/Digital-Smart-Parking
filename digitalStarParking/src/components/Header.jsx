import starIcon from '../images/star.png'

const Header = () => {
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
        <p>Home</p>
        <p>Book a Spot</p>
        <p>Contact Us</p>
      </div>
    </nav>
  );
};

export default Header;
