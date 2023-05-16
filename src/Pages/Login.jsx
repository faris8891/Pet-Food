
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Login() {
  const login = localStorage.getItem("Login");
  function submitHandler() {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = Object.fromEntries(data.entries());
    axios.get("http://localhost:3000/users").then((e) => {
      const users = e.data;
      const check = users.filter((e) => {
        return user.email == e.email && user.password == e.password;
      });
      if (check.length == 1) {
        console.log(check[0].email);
        localStorage.setItem("userName", check[0].email);
        localStorage.setItem("id", check[0].id);
        localStorage.setItem("Login", true);
        window.location.reload();
      } else {
        alert("Email or Password is Wrong");
      }
    });
  }
  return (
    <div className="form-container">
      {login === "true" && <Navigate to="/" />}

      <form className="register-form" onSubmit={submitHandler}>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
        <label>Password : </label>
        <input
          minLength={4}
          maxLength={8}
          name="password"
          type="password"
          placeholder="Enter Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
