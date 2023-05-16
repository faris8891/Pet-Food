import React from "react";

export default function ProductCard(props) {
  const product = props.product;
  const eventHandler=props.eventHandler
  return (
    <>
      <div className="product-card-container">
        <h3>{product.Name}</h3>
        <h3>Rs: {product.Price}</h3>
        <h4>Category : {product.Category}</h4>
        {product.Stock ? <button onClick={()=>eventHandler(product.id,product.Price,product.Name)}>Add to cart</button> : <h5>Out of stock</h5>}
      </div>
    </>
  );
}