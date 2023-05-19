import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

export default function ProductCard(props) {
  const product = props.product;
  const eventHandler = props.eventHandler;
  return (
    <>
      <Card style={{ width: "18rem",margin:"10px"}}>
        <Card.Img variant="top" src="https://media.petsathome.com/wcsstore/pah-cas01//300/7147370PL.jpg" />
        <Card.Body>
          <Card.Title>{product.Name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price Rs: {product.Price}</ListGroup.Item>
          <ListGroup.Item>Category : {product.Category}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {product.Stock ? (
            <Button
              variant="primary"
              onClick={() =>
                eventHandler(product.id, product.Price, product.Name)
              }
            >
              Add to cart
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              Out of stock
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
