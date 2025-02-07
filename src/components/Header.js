import { useEffect, useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [LogInBtn, setLogInBtn] = useState("LogIn");
 
  useEffect(() => {
    console.log("useEffect called");
  }, [LogInBtn]);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="Header">
      <div className="Img-Container">
        <img className="Logo" alt="Company logo" src={APP_LOGO}></img>
      </div>
      <div className="Nav-items">
        <ul>
          <li>Online status {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contactUs"}>ContactUs</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
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
