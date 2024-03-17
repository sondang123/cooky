import React from "react";
import { Button, Card } from "react-bootstrap";
import AppResource from "../../../general/constants/AppResource";
import { AppData } from "../../../general/components/AppData";

function ItemCard(props) {
  const { title, subTitle, img, description, onClick = () => {} } = props;

  return (
    <Card
      onClick={() => {
        onClick();
      }}
      className="border-0 shadow"
    >
      <div className="ratio ratio-16x9">
        <Card.Img variant="top" src={img} alt="img" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{subTitle}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Xem chi tiết</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
