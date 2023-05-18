import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import useAddCart from "../Helpers/useAddCart";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [eventHandler] = useAddCart();
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((e) => {
      setProducts(e.data);
    });
  }, []);

  return (
    <>
      <div className="main-container">
        {products.map((e) => {
          return (
            <div key={Math.floor(Math.random() * 100000)}>
              <ProductCard product={e} eventHandler={eventHandler} />
            </div>
          );
        })}
      </div>
    </>
  );
}
