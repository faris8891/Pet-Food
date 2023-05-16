import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([""]);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((e) => {
      setProducts(e.data);
    });
    const userId = Number(localStorage.getItem("id"));
    axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((e) => setUser(e.data));
  }, []);

  const addCart = (productId, productPrice, userId, productName) => {
    const cart = user.cart;
    console.log(cart);
    const exist = cart.filter((e) => productId == e.productId);
    if (exist.length == 1) {
      cart.map((e) => {
        if (productId == e.productId) {
          e.quantity = e.quantity + 1;
          user.cart = cart;
          axios.put(`http://localhost:3000/users/${userId}`, user);
        }
      });
    } else {
      cart.push({
        Name: productName,
        productId: productId,
        quantity: 1,
        Price: productPrice,
      });
      axios.put(`http://localhost:3000/users/${userId}`, user);
    }
  };

  const eventHandler = (id, price, productName) => {
    const productId = id;
    const productPrice = price;
    const userId = Number(localStorage.getItem("id"));

    addCart(productId, productPrice, userId, productName);
  };

  return (
    <>
      <div className="main-container">
        {products.map((e) => {
          return (
            <>
              <ProductCard key={e.id} product={e} eventHandler={eventHandler} />
            </>
          );
        })}
      </div>
    </>
  );
}
