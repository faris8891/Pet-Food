import { NavLink } from "react-router-dom";
import Logout from "./Logout";

export default function Navbar() {
  const login = localStorage.getItem("Login");
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-container">
          <NavLink className="navbar-items" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-items" to="products">
            Product
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
              <NavLink className="navbar-items" to="cart">
                Cart
              </NavLink>
              <Logout />
            </>
          )}
        </div>
      </div>
    </>
  );
}
