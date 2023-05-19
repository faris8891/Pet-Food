import { useEffect, useState } from "react";
import axios from "axios";
import CartCard from "../Components/CartCard";
import { Container, Col, Row, Stack } from "react-bootstrap";

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
      <Container>
        <Row>
          <Col sm={3}>
            {cartItems.map((e) => {
              return (
                <li key={Math.floor(Math.random() * 1000)}>
                  {e.Name} Qty - {e.quantity}
                </li>
              );
            })}
            <h2>Total Amount : {totalAmount}</h2>
            <button>Place order</button>
          </Col>

          {cartItems.map((e) => {
            return (
              <div
                key={Math.floor(Math.random() * 100)}
                className="product-card-container "
              >
                <Col sm={8}>
                  <CartCard product={e} />
                </Col>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
