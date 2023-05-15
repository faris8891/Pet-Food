import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Register() {
  const login = localStorage.getItem("Login");
  function submitHandler() {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = Object.fromEntries(data.entries());
    axios.get("http://localhost:3000/users", user).then((e) => {
      const users = e.data;
      const check = users.filter((e) => {
        return user.email == e.email;
      });
      if (check.length == 0) {
        axios.post("http://localhost:3000/users", user);
      } else {
        alert("Email already exist");
      }
    });
  }
  return (
    <div className="form-container">
      {login === "" && <Navigate to="/" />}
      <form className="register-form" onSubmit={submitHandler}>
        <label>Full Name : </label>
        <input
          minLength={4}
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
        />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
