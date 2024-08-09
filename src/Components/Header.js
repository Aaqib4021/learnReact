import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const { LoggedUser } = useContext(UserContext);
  const [btnInside, setbtnInside] = useState("login");
  useEffect(() => {}, [btnInside]);
  return (
    <div className="flex justify-between items-center  mb-8 border-[1px] border-gray-400 p-4 shadow-zinc-600 shadow-md select-none">
      <div className="logo-container">
        <img className="w-20 rounded-full" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul className="flex gap-16">
          <li className="bg-emerald-500 rounded-xl px-4 py-2 text-white hover:bg-indigo-600">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-emerald-500 rounded-xl px-4 py-2 text-white hover:bg-indigo-600">
            <Link to="/about">About Me</Link>
          </li>
          <li className="bg-emerald-500 rounded-xl px-4 py-2 text-white hover:bg-indigo-600">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="bg-emerald-500 rounded-xl px-4 py-2 text-white hover:bg-indigo-600">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="bg-emerald-500 rounded-xl px-4 py-2 text-white hover:bg-indigo-600">
            <Link to="/cart"> Cart({cartItems.length}) </Link>
          </li>

          <button
            className="mr-2 bg-orange-700 p-2 rounded-xl text-white hover:bg-sky-700"
            onClick={() => {
              btnInside === "login"
                ? setbtnInside("logout")
                : setbtnInside("login");
            }}
          >
            {btnInside}
          </button>
          <li className="ml-[-30px] font-bold mt-2">User: {LoggedUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
