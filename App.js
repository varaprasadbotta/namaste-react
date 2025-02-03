import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="Header">
      <div className="Img-Container">
        <img
          className="Logo"
          alt="Company logo"
          src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg"
        ></img>
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="RestaurantCard">
      <img
        className="Card-image"
        alt="dish pic"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dv37g3hyph2fyeqw6kfl"
      />
      <h3>Meghana Food</h3>
      <h4>Biryani, North indian , momus</h4>
      <h4>4.5 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search</div>
      <div className="Res-Container">
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
