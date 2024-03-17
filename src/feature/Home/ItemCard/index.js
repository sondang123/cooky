import React from "react";
import { Button, Card } from "react-bootstrap";
import "./style.scss";
function ItemCard(props) {
  const { title, subTitle, img, description, onClick = () => {} } = props;

  return (
    <Card
      onClick={() => {
        onClick();
      }}
      className="border-0 shadow h-100 card-item-content "
    >
      <div className="ratio ratio-16x9">
        <Card.Img variant="top" src={img} alt="img" />
      </div>
      <Card.Body className="flex-grow-1 d-flex flex-column">
        <div className="pb-2">
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{subTitle}</Card.Subtitle>
          <Card.Text className="text-des">{description}</Card.Text>
        </div>

        <Button
          variant="primary "
          clasName="flex-grow-1"
          style={{ marginTop: "auto" }}
        >
          Xem chi tiết
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
