import React from "react";

export default function CartCard(props) {
  return (
    <>
      <h2>{props.product.Name}</h2>
      <h3>{props.product.Price}</h3>
      <h3>Quantity : {props.product.quantity}</h3>
    </>
  );
}
