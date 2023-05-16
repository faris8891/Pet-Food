export default function Logout() {
  function eventHandler() {
    localStorage.setItem("Login", false);
    window.location.reload();
  }
  return <button onClick={eventHandler}>Log-out</button>;
}
