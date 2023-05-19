import { Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import { Auth } from "./Helpers/Auth";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="cart"
          element={
            <Auth>
              <Cart />
            </Auth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
