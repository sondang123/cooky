import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import AppResource from "../../../general/constants/AppResource";
import ItemCard from "../ItemCard";
import { AppData } from "../../../general/components/AppData";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

function TopDishes(props) {
  const { title, dataCook } = props;
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="mb-3">{title}</h3>
      <div>
        <Row className="gap-3">
          {dataCook?.map((item, index) => (
            <Col lg={3} sm={6} md={4} key={index}>
              <ItemCard
                key={index}
                title={item?.name}
                img={item?.img}
                subTitle={
                  AppData.category?.find(
                    (i) => i?.categoryId === item.categoryId
                  )?.name
                }
                description={item?.description}
                onClick={() => {
                  navigate(`/chi-tiet-mon/${item?.idCook}`);
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default TopDishes;
