import React from "react";
import AppLayout from "../../general/components/AppLayout";
import Banner from "./Banner";
import { Col, Container, Row } from "react-bootstrap";
import CategoryMenu from "./CategoryMenu";
import TopDishes from "./TopDishes";
import { AppData } from "../../general/components/AppData";
import _ from "lodash";
import SearchMenu from "./Search";
import AppResource from "../../general/constants/AppResource";

function Home() {
  const dataCook = _.sampleSize(AppData.dataCook, 5);
  return (
    <AppLayout>
      <Container>
        <Banner />
        <SearchMenu />
        <CategoryMenu title={"Danh mục "} />
        <div className="mt-3 mb-3">
          <TopDishes title={"Top món ăn "} dataCook={dataCook} />
        </div>

        <h3 className="text-center mt-5">BÚN CHẢ</h3>
        <div
          style={{ background: "rgb(199 199 199 / 8%)" }}
          className="mt-5"
          id={"bun-cha"}
        >
          <Row className="align-items-center">
            <Col md={6}>
              {" "}
              <div className="ratio ratio-16x9">
                <img src={AppResource.images.img_banner1} alt={"Bun-cha"} />
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center flex-column justify-content-center">
                <h2>Bún chả việt nam</h2>
                <h4>Mang ẩm thực vươn tầm thế giới</h4>
              </div>
            </Col>
          </Row>
        </div>
        <h3 className="text-center mt-5">BÁNH MỲ</h3>
        <div className="mt-5" id={"banh-mi"}>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-center flex-column justify-content-center">
                <h2>Bún chả việt nam</h2>
                <h4>Mang ẩm thực vươn tầm thế giới</h4>
              </div>
            </Col>
            <Col md={6}>
              {" "}
              <div className="ratio ratio-16x9">
                <img src={AppResource.images.img_banner1} alt={"Bun-cha"} />
              </div>
            </Col>
          </Row>
        </div>
        <h3 className="text-center mt-5">PHỞ</h3>

        <div
          style={{ background: "rgb(199 199 199 / 8%)" }}
          className="mt-5"
          id="pho"
        >
          <Row className="align-items-center">
            <Col md={6}>
              {" "}
              <div className="ratio ratio-16x9">
                <img src={AppResource.images.img_banner1} alt={"Bun-cha"} />
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center flex-column justify-content-center">
                <h2>Bún chả việt nam</h2>
                <h4>Mang ẩm thực vươn tầm thế giới</h4>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </AppLayout>
  );
}

export default Home;
