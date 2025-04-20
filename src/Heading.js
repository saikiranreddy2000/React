import { LOGO_URL } from "../asserts/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../asserts/UserContext";
import { useSelector } from "react-redux";

export const Heading = () => {
  const { loggedIn } = useContext(UserContext);
  const [btnChange, setbtnChange] = useState("login");
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between shadow-lg">
      <img className=" h-24 " alt="Foodezz" src={LOGO_URL} />

      <ul className="flex m-10">
        <li className="px-4 hover:text-green-300">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 hover:text-green-300">
          <Link to="/aboutus">About us</Link>
        </li>
        <li className="px-4 hover:text-green-300">
          <Link to="/contact">contact us</Link>
        </li>
        <li className="px-4">
          <Link to="/cart">
            🛒
            <span className="bg-green-200 px-1 absolute rounded-full text-xs">
              {cartItems.length==0?"👎":cartItems.length}
            </span>
          </Link>
        </li>
        <button
          className="bg-green-200 px-2 mx-3 rounded-lg hover:bg-green-300 hover:text-white"
          onClick={() => {
            btnChange == "login"
              ? setbtnChange("logout")
              : setbtnChange("login");
          }}
        >
          {btnChange}
        </button>
      </ul>
    </div>
  );
};
