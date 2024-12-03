import React from "react";
import ReactDOM from "react-dom/client";

/*
    Now we are going to build Food ordering app
    ============================================
    Planning the app

    -Header
        - logo
        - nav-items
    -Body
        - search bar
        - resturent card
            - image
            - Name of res
            - price of item
            - cienes
            - time
            - rating
    -Footer
        - copy rights
        - links
        - some other stuff
*/
// Root element
const MyApp = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
//header
const Header = () => {
  return (
    <div className="Header">
      <img
        className="nav-logo"
        alt="logo"
        src="https://img.freepik.com/premium-vector/online-food-order-logo-icon_61778-45.jpg"
      ></img>
      <div className="nav-items">
        <ul className="nav-item">
          <li>Home</li>
          <li>Contact us</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
