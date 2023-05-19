import { Button } from "react-bootstrap";
export default function Logout() {
  function eventHandler() {
    localStorage.setItem("Login", false);
    window.location.reload();
  }
  return <Button onClick={eventHandler} variant="danger">Log-out</Button>
  
}
