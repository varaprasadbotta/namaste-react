import { LOGO_IMG } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="company-logo"
          src={LOGO_IMG}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Constact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
