import React from "react";
import { Image } from "react-bootstrap";
import AppResource from "../../../general/constants/AppResource";
import { AppData } from "../../../general/components/AppData";
import "./style.scss";
import useRouter from "../../../hooks/useRouter";
import { useNavigate } from "react-router-dom";

function CategoryMenu(props) {
  const { title } = props;
  let dataCategory = AppData.category ?? [];
  const navigate = useNavigate();
  return (
    <div className="categoryMenu">
      <h3 className="mt-2">{title}</h3>

      <div
        className="d-flex mt-3"
        style={{ overflowX: "auto", overflowY: "hidden" }}
      >
        {dataCategory?.map((item, index) => (
          <div
            className="d-flex img-cate  me-5 flex-column align-items-center justify-content-center"
            key={index}
            onClick={() => {
              navigate(`/danh-muc/${item?.categoryId}`);
            }}
          >
            <Image
              src={item?.img}
              roundedCircle
              width={80}
              height={80}
              style={{ objectFit: "cover" }}
              className="img-cate"
            />
            <div className="text-center flex-grow-1">
              <p
                className="mb-0 mt-2"
                style={{ width: "max-content", maxWidth: "120px" }}
              >
                {item?.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
