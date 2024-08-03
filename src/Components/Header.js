import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";

const Header = () => {
  const [btnInside, setbtnInside] = useState("login");
  useEffect(() => {
  }, [btnInside]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button 
            onClick={() => {
              btnInside === "login"
                ? setbtnInside("logout")
                : setbtnInside("login");
            }}
          >
            {btnInside}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
