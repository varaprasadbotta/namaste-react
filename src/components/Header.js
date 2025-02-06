import { useEffect, useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [LogInBtn, setLogInBtn] = useState("LogIn");
  console.log("header called");

  useEffect(() => {
    console.log("useEffect called");
  }, [LogInBtn]);

  return (
    <div className="Header">
      <div className="Img-Container">
        <img className="Logo" alt="Company logo" src={APP_LOGO}></img>
      </div>
      <div className="Nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
           <Link to={"/contactUs"}>ContactUs</Link>
          </li>
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
