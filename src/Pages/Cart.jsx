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
  console.log(totalAmount);

  return (
    <>
      <div className="cart">
        <h1>{user.name}</h1>
        <h1>Total Amount : {totalAmount}</h1>
      </div>
      <div className="main-container">
        {cartItems.map((e) => {
          return (
            <>
              <div className="product-card-container ">
                <CartCard key={e.id} product={e} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
