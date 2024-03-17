import React, { useEffect, useState } from "react";
import AppLayout from "../../general/components/AppLayout";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AppData } from "../../general/components/AppData";
import TopDishes from "../Home/TopDishes";

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
          <Row className="">
            <Col md={6}>
              <h5>Nguyên liệu :</h5>
              <ul>
                {dataRender?.Ingredient?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h5>Quy trình nấu:</h5>
              <p>
                Bước 1: Sơ chế nguyên liệu Cá làm sạch ruột, đánh vảy, cắt khúc
                rồi chà xát với chút muối hạt, chanh hoặc rượu trắng, rửa sạch
                cho hết mùi tanh. Sau đó, ướp cá với chút nước mắm, hạt nêm, tỏi
                băm trong 10 phút cho thấm gia vị, để cá đậm đà hơn khi nấu.
                Gừng cạo vỏ, rửa sạch rồi băm nhỏ. Ớt cắt đôi, bỏ hạt, rửa sạch
                rồi thái miếng nhỏ. Hành, thì là nhặt lá úa, rửa sạch rồi thái
                nhỏ. Dứa gọt vỏ, bỏ mắt, thái miếng nhỏ. Me chua ngâm với nước
                nóng, dằm và lọc lấy nước cốt me. Cà chua rửa sạch, đem bổ múi
                cau. Đậu bắp đem rửa sạch, cắt chéo.
              </p>
              <p>
                Bước 1: Sơ chế nguyên liệu Cá làm sạch ruột, đánh vảy, cắt khúc
                rồi chà xát với chút muối hạt, chanh hoặc rượu trắng, rửa sạch
                cho hết mùi tanh. Sau đó, ướp cá với chút nước mắm, hạt nêm, tỏi
                băm trong 10 phút cho thấm gia vị, để cá đậm đà hơn khi nấu.
                Gừng cạo vỏ, rửa sạch rồi băm nhỏ. Ớt cắt đôi, bỏ hạt, rửa sạch
                rồi thái miếng nhỏ. Hành, thì là nhặt lá úa, rửa sạch rồi thái
                nhỏ. Dứa gọt vỏ, bỏ mắt, thái miếng nhỏ. Me chua ngâm với nước
                nóng, dằm và lọc lấy nước cốt me. Cà chua rửa sạch, đem bổ múi
                cau. Đậu bắp đem rửa sạch, cắt chéo.
              </p>
              <p>
                Bước 1: Sơ chế nguyên liệu Cá làm sạch ruột, đánh vảy, cắt khúc
                rồi chà xát với chút muối hạt, chanh hoặc rượu trắng, rửa sạch
                cho hết mùi tanh. Sau đó, ướp cá với chút nước mắm, hạt nêm, tỏi
                băm trong 10 phút cho thấm gia vị, để cá đậm đà hơn khi nấu.
                Gừng cạo vỏ, rửa sạch rồi băm nhỏ. Ớt cắt đôi, bỏ hạt, rửa sạch
                rồi thái miếng nhỏ. Hành, thì là nhặt lá úa, rửa sạch rồi thái
                nhỏ. Dứa gọt vỏ, bỏ mắt, thái miếng nhỏ. Me chua ngâm với nước
                nóng, dằm và lọc lấy nước cốt me. Cà chua rửa sạch, đem bổ múi
                cau. Đậu bắp đem rửa sạch, cắt chéo.
              </p>
              <p>
                Bước 1: Sơ chế nguyên liệu Cá làm sạch ruột, đánh vảy, cắt khúc
                rồi chà xát với chút muối hạt, chanh hoặc rượu trắng, rửa sạch
                cho hết mùi tanh. Sau đó, ướp cá với chút nước mắm, hạt nêm, tỏi
                băm trong 10 phút cho thấm gia vị, để cá đậm đà hơn khi nấu.
                Gừng cạo vỏ, rửa sạch rồi băm nhỏ. Ớt cắt đôi, bỏ hạt, rửa sạch
                rồi thái miếng nhỏ. Hành, thì là nhặt lá úa, rửa sạch rồi thái
                nhỏ. Dứa gọt vỏ, bỏ mắt, thái miếng nhỏ. Me chua ngâm với nước
                nóng, dằm và lọc lấy nước cốt me. Cà chua rửa sạch, đem bổ múi
                cau. Đậu bắp đem rửa sạch, cắt chéo.
              </p>
              <p>
                Bước 1: Sơ chế nguyên liệu Cá làm sạch ruột, đánh vảy, cắt khúc
                rồi chà xát với chút muối hạt, chanh hoặc rượu trắng, rửa sạch
                cho hết mùi tanh. Sau đó, ướp cá với chút nước mắm, hạt nêm, tỏi
                băm trong 10 phút cho thấm gia vị, để cá đậm đà hơn khi nấu.
                Gừng cạo vỏ, rửa sạch rồi băm nhỏ. Ớt cắt đôi, bỏ hạt, rửa sạch
                rồi thái miếng nhỏ. Hành, thì là nhặt lá úa, rửa sạch rồi thái
                nhỏ. Dứa gọt vỏ, bỏ mắt, thái miếng nhỏ. Me chua ngâm với nước
                nóng, dằm và lọc lấy nước cốt me. Cà chua rửa sạch, đem bổ múi
                cau. Đậu bắp đem rửa sạch, cắt chéo.
              </p>
            </Col>
            <Col md={6}>
              <div className="ratio ratio-16x9">
                <img src={dataRender?.img} alt={dataRender?.name} />
              </div>
            </Col>
          </Row>
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
