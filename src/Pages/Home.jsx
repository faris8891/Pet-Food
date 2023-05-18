import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import useAddCart from "../Helpers/useAddCart";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Cat");
  const [eventHandler] = useAddCart();
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((e) => {
      setProducts(e.data);
    });
  }, []);
  console.log(products);

  function CategoryHandler() {
    setCategory(event.target.value);
  }
  console.log(category);

  return (
    <>
      <div className="category-container">
      <select
        className="category-select"
        onChange={CategoryHandler}
        name="Category"
      >
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        </select>
        </div>

      <div className="main-container">
        {products.map((e) => {
          return (
            <div key={Math.floor(Math.random() * 100000)}>
              {e.Stock && e.Category == category && (
                <ProductCard product={e} eventHandler={eventHandler} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
