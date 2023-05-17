import { useEffect, useState } from "react";
import axios from "axios";
import CartCard from "../Components/CartCard";

export default function Cart() {
  const [user, setuser] = useState({ cart: [""] });
  const userId = localStorage.getItem("id");
  useEffect(() => {
    axios(`http://localhost:3000/users/${userId}`).then((e) => {
      setuser(e.data);
    });
  }, []);

  const cartItems = user.cart;
  let totalAmount = 0;
  cartItems.map((e) => {
    totalAmount += e.Price * e.quantity;
  });

  return (
    <>
      <div className="cart">
        <div className="grid-item-1">
          {cartItems.map((e) => {
            return (
              <li key={Math.floor(Math.random() * 1000)}>
                {e.Name} Qty - {e.quantity}
              </li>
            );
          })}

          <h2>Total Amount : {totalAmount}</h2>
          <button>Place order</button>
        </div>
        <div className="main-container">
          {cartItems.map((e) => {
            return (
              <>
                <div key={e.id} className="product-card-container ">
                  <CartCard product={e} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
