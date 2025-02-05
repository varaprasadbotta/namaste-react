import { useEffect, useState } from "react";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  const [LogInBtn, setLogInBtn] = useState("LogIn");
  console.log("header called");

  useEffect(() => {
    console.log("useEffect called");
  },[LogInBtn]);

  return (
    <div className="Header">
      <div className="Img-Container">
        <img className="Logo" alt="Company logo" src={APP_LOGO}></img>
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="logInBtn"
            onClick={() => {
              LogInBtn === "LogIn"
                ? setLogInBtn("LogOut")
                : setLogInBtn("LogIn");
            }}
          >
            {LogInBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
