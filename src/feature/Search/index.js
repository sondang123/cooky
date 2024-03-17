import React, { useEffect, useState } from "react";
import AppLayout from "../../general/components/AppLayout";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppData } from "../../general/components/AppData";
import StringUtils from "../../general/utils/StringUtils";
import ItemCard from "../Home/ItemCard";
import { useNavigate } from "react-router-dom";
import Empty from "../../general/components/Empty";
import AppResource from "../../general/constants/AppResource";
import _ from "lodash";

function SearchScreen() {
  const navigate = useNavigate();

  const { value, valueFilter } = useSelector((state) => state.search);
  const dataCook = AppData.dataCook;
  const [renderData, setRenderData] = useState([]);
  useEffect(() => {
    if (valueFilter?.length === 0 && value === "" && !value) {
      setRenderData(dataCook);
    } else if (valueFilter?.length > 0 && value === "" && !value) {
      let data = dataCook?.filter((item) =>
        item?.Ingredient?.some((i) => valueFilter?.some((e) => i === e?.name))
      );
      setRenderData(data);
    } else {
      let data = dataCook?.filter(
        (item) =>
          StringUtils.removeVietnameseTones(_.lowerCase(item?.name))?.includes(
            StringUtils.removeVietnameseTones(_.lowerCase(value))
          ) ||
          item?.Ingredient?.some((i) => valueFilter?.some((e) => i === e?.name))
      );
      setRenderData(data);
    }
  }, [value]);

  return (
    <div className="">
      <AppLayout>
        <Container>
          <div className="mt-3">
            {" "}
            <h3>
              {/* Kết quả tìm kiếm:{value === "" || !value ? " Tất cả" : value}
               */}
              Đây là những món bạn cần
            </h3>
          </div>
          {renderData?.length > 0 ? (
            <Row>
              {renderData?.map((item, index) => (
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
          ) : (
            <Empty
              text={"Không có món nào trong danh mục này"}
              visible={false}
              imageEmpty={AppResource.images.imgDefault}
              imageEmptyPercentWidth={30}
            />
          )}
        </Container>
      </AppLayout>
    </div>
  );
}

export default SearchScreen;
