import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Logout from "./Logout";
import axios from "axios";
import UserProfile from "./UserProfile";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Navbar01() {
  const [user, setUser] = useState({ cart: [""] });
  const login = localStorage.getItem("Login");
  const userId = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((e) => setUser(e.data));
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Pet Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink className="navbar-items" to="/">
                  Home
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className="navbar-items" to="products">
                  Products
                </NavLink>
              </Nav.Link>
            </Nav>

            <Nav >
              {login === "false" && (
                <>
                  <Nav.Link>
                    <NavLink className="navbar-items" to="login">
                      Login
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink className="navbar-items" to="register">
                      Register
                    </NavLink>
                  </Nav.Link>
                </>
              )}
              {login !== "false" && (
                <>
                  <Nav.Link >{user.name}</Nav.Link>
                  
                  <Nav.Link>
                    <NavLink className="navbar-items" to="cart">
                      Cart <span>{user.cart.length}</span>
                    </NavLink>
                  </Nav.Link>
                  <NavLink className="navbar-items" to="cart"></NavLink>
                  <Logout />
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
