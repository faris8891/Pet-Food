import React from "react";
import{Card,ListGroup}from "react-bootstrap"

export default function CartCard(props) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.petsathome.com/wcsstore/pah-cas01//300/7147370PL.jpg" />
      <Card.Body>
        <Card.Title>{props.product.Name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price Rs :{props.product.Price}</ListGroup.Item>
        <ListGroup.Item>Quantity : {props.product.quantity}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link>Remove</Card.Link>
      </Card.Body>
    </Card>
    </>
  );
}
