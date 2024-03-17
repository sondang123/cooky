import React from "react";
import AppResource from "../../general/constants/AppResource";
import { useNavigate } from "react-router-dom";
import { AppData } from "../../general/components/AppData";
import _ from "lodash";
import { Image } from "react-bootstrap";

const Footer = () => {
  const navigate = useNavigate();
  let data = _.take(AppData.category, 2);
  return (
    <footer className="page-footer font-small blue pt-4 shadow">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <img
              src={AppResource.images.img_logo}
              style={{ width: "70px", cursor: "pointer" }}
              alt="logo"
              onClick={() => {
                navigate("/");
              }}
            />
            <p>Món ăn ngon cho người việt</p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Món yêu thích</h5>
            <div className="d-flex gap-4 justify-content-center">
              <ul className="list-unstyled">
                {data?.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigate(`/danh-muc/${item?.categoryId}`);
                    }}
                    className="cursor-pointer hover-opacity-80"
                  >
                    <div>
                      <Image
                        src={item?.img}
                        roundedCircle
                        width={30}
                        height={30}
                        style={{ objectFit: "cover" }}
                        className="img-cate"
                      />
                      <p>{item?.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled">
                {data?.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigate(`/danh-muc/${item?.categoryId}`);
                    }}
                    className="cursor-pointer hover-opacity-80"
                  >
                    <div>
                      <Image
                        src={item?.img}
                        roundedCircle
                        width={30}
                        height={30}
                        style={{ objectFit: "cover" }}
                        className="img-cate"
                      />
                      <p>{item?.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Món thông dụng</h5>
            <div className="d-flex gap-4 justify-content-center">
              <ul className="list-unstyled">
                {data?.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigate(`/danh-muc/${item?.categoryId}`);
                    }}
                    className="cursor-pointer hover-opacity-80"
                  >
                    <div>
                      <Image
                        src={item?.img}
                        roundedCircle
                        width={30}
                        height={30}
                        style={{ objectFit: "cover" }}
                        className="img-cate"
                      />
                      <p>{item?.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="list-unstyled">
                {data?.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigate(`/danh-muc/${item?.categoryId}`);
                    }}
                    className="cursor-pointer hover-opacity-80"
                  >
                    <div>
                      <Image
                        src={item?.img}
                        roundedCircle
                        width={30}
                        height={30}
                        style={{ objectFit: "cover" }}
                        className="img-cate"
                      />
                      <p>{item?.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2024 Copyright:
        <a> Cooky</a>
      </div>
    </footer>
  );
};

export default Footer;
