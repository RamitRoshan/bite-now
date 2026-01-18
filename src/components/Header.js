import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //creating hooks for user context
  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  // console.log("Header render");

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty[] => useEffect is called on initial render(just once)
  //if dependency array is [btnNameReact] => it called everytime btnNameReact is updated
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnNameReact]);


  return (
    
    <div className="flex justify-between shadow-lg">
      
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}/>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {/* ternary operator(if-else ? :) */}
            Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button 
          className="login" 
          onClick={() => { 
            //if btnname is login then update setbtnname with logout & vice-versa 
            btnNameReact === "Login" ? setBtnNameReact("Logout") :
            setBtnNameReact("Login");
          }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>

      </div>
      
    </div>
  );
};

export default Header;  