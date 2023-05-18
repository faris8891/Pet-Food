import { Navigate } from "react-router-dom";

export const Auth = ({children}) => {
  const login = localStorage.getItem("Login");
    if (login == "false") {
      return <Navigate to="/login"/>
    }
    return children
};
