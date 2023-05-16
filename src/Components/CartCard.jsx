import React from "react";

export default function CartCard(props) {
  console.log(props.product);
  return (
    <>
      <h1>{props.product.name}</h1>
      <h2>{props.product.Price}</h2>
      <h3>Quantity : {props.product.quantity}</h3>
    </>
  );
}
