import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Cat");
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
      <h1>Home</h1>
      <select onChange={CategoryHandler} name="Category">
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
      </select>
      <div className="main-container">
        {products.map((e) => {
          return (
            <>
              {e.Stock && e.Category == category && <ProductCard product={e} />}
            </>
          );
        })}
      </div>
    </>
  );
}
