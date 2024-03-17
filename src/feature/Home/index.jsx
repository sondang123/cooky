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
import Fade from "react-reveal/Fade";
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

        <h3 className="text-center mt-5" id={"bun-cha"}>
          BÚN CHẢ
        </h3>
        <div style={{ background: "rgb(199 199 199 / 8%)" }} className="mt-5">
          <Row className="align-items-center g-3">
            <Col md={6}>
              <Fade right>
                {" "}
                <div className="ratio ratio-16x9">
                  <img src={AppResource.images.img_banner1} alt={"Bun-cha"} />
                </div>
              </Fade>
            </Col>
            <Col md={6}>
              <Fade left>
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <h2>Bún chả việt nam</h2>
                  <h4>Mang ẩm thực vươn tầm thế giới</h4>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
        <h3 className="text-center mt-5 " id={"banh-my"}>
          BÁNH MỲ
        </h3>
        <div className="mt-5">
          <Row className="align-items-center g-3">
            <Col md={6}>
              <Fade left>
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <h2>Bún chả việt nam</h2>
                  <h4>Mang ẩm thực vươn tầm thế giới</h4>
                </div>
              </Fade>
            </Col>
            <Col md={6}>
              {" "}
              <Fade right>
                <div className="ratio ratio-16x9">
                  <img src={AppResource.images.img_banner1} alt={"Bun-cha"} />
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
        <h3 className="text-center mt-5" id="pho">
          PHỞ
        </h3>

        <div style={{ background: "rgb(199 199 199 / 8%)" }} className="mt-5">
          <Row className="align-items-center g-3">
            <Col md={6}>
              {" "}
              <Fade right>
                <div className="ratio ratio-16x9">
                  <img src={AppResource.images.img_banner1} alt={"Bun-cha"} />
                </div>
              </Fade>
            </Col>
            <Col md={6}>
              <Fade left>
                <div className="d-flex align-items-center flex-column justify-content-center">
                  <h2>Bún chả việt nam</h2>
                  <h4>Mang ẩm thực vươn tầm thế giới</h4>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </AppLayout>
  );
}

export default Home;
