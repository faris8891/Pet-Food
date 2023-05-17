import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Logout from "./Logout";
import axios from "axios";
import UserProfile from "./UserProfile";

export default function Navbar() {
  const [user, setUser] = useState({ cart: [""] });
  const login = localStorage.getItem("Login");
  const userId = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((e) => setUser(e.data));
  }, [user]);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-container">
          <NavLink className="navbar-items" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-items" to="products">
            Products
          </NavLink>
          {login === "false" && (
            <>
              <NavLink className="navbar-items" to="login">
                Login
              </NavLink>
              <NavLink className="navbar-items" to="register">
                Register
              </NavLink>
            </>
          )}
        </div>
        <div className="navbar-container2">
          {login !== "false" && (
            <>
              <UserProfile userName={user.name} />
              <NavLink className="navbar-items" to="cart">
                Cart <span>{user.cart.length}</span>
              </NavLink>
              <Logout />
            </>
          )}
        </div>
      </div>
    </>
  );
}
