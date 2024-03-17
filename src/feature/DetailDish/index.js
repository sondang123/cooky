import React, { useEffect, useState } from "react";
import AppLayout from "../../general/components/AppLayout";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AppData } from "../../general/components/AppData";
import TopDishes from "../Home/TopDishes";
import Empty from "../../general/components/Empty";
import AppResource from "../../general/constants/AppResource";

function DetailDish() {
  const { id } = useParams();
  const [dataRender, setDataRender] = useState();
  useEffect(() => {
    let data = AppData.dataCook?.find((item) => item?.idCook === Number(id));

    setDataRender(data);
  }, [id]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
  return (
    <AppLayout>
      <Container>
        <div className="mt-3">
          <h3>Công thức nấu món: {dataRender?.name}</h3>
        </div>

        <div className="mt-3">
          {dataRender ? (
            <Row className="">
              <Col md={6}>
                <h5>Nguyên liệu :</h5>
                <ul>
                  {dataRender?.Ingredient?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h5>Quy trình nấu:</h5>
                {dataRender?.content}
              </Col>
              <Col md={6}>
                <div className="ratio ratio-16x9">
                  <img src={dataRender?.img} alt={dataRender?.name} />
                </div>
              </Col>
            </Row>
          ) : (
            <Empty
              text={"Không có chi tiết cho món hiện tại "}
              visible={false}
              imageEmpty={AppResource.images.imgDefault}
              imageEmptyPercentWidth={10}
            />
          )}
          <div className="border-top pt-2">
            <TopDishes
              dataCook={AppData.dataCook}
              title="Bạn có thể quan tâm"
            />
          </div>
        </div>
      </Container>
    </AppLayout>
  );
}

export default DetailDish;
