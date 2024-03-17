import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import AppResource from "../../general/constants/AppResource";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="sticky-top">
      {" "}
      <Navbar expand={"md"} className=" bg-white shadow  p-0 ">
        <Container>
          <Navbar.Brand>
            <img
              src={AppResource.images.img_logo}
              style={{ width: "60px", cursor: "pointer" }}
              alt="logo"
              onClick={() => {
                navigate("/");
              }}
            />
          </Navbar.Brand>

          <div className="d-none d-md-block">
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          </div>
          <div className="d-none d-md-block">
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  <img
                    src={AppResource.images.img_logo}
                    style={{ width: "60px", cursor: "pointer" }}
                    alt="logo"
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                  <Nav.Item
                    className="cursor-pointer hover-opacity-80 me-2"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Trang chủ
                  </Nav.Item>
                  <Nav.Link href="#bun-cha" className="me-2">
                    Bún chả
                  </Nav.Link>
                  <Nav.Link href="#banh-my">Bánh mỳ</Nav.Link>
                  <Nav.Link href="#pho">Phở</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
