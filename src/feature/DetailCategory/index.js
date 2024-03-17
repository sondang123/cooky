import React, { useEffect, useState } from "react";
import AppLayout from "../../general/components/AppLayout";
import { useParams } from "react-router-dom";
import { AppData } from "../../general/components/AppData";
import { Container } from "react-bootstrap";
import TopDishes from "../Home/TopDishes";
import CategoryMenu from "../Home/CategoryMenu";
import _ from "lodash";
import Empty from "../../general/components/Empty";
import AppResource from "../../general/constants/AppResource";

function DetailCategory() {
  const { id } = useParams();
  const [dataItem, setDataItem] = useState();
  const [dataCook, setDataCook] = useState([]);
  useEffect(() => {
    const detail = AppData.category?.find(
      (item) => item?.categoryId === Number(id)
    );

    setDataItem(detail);
    const listCook = AppData.dataCook?.filter(
      (i) => i?.categoryId === Number(id)
    );
    setDataCook(listCook);
  }, [id]);
  const dataSame = _.sampleSize(AppData.dataCook, 5);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div>
      <AppLayout>
        <Container>
          {/* <div className="d-flex">
            <img
              src={
                "https://inan2h.vn/wp-content/uploads/2022/12/in-banner-quang-cao-do-an-14.jpg"
              }
              width={"100%"}
            />
          </div> */}
          <div className="mt-3">
            {" "}
            <h3>Danh mục : {dataItem?.name}</h3>
          </div>
          <div>
            {dataCook?.length > 0 ? (
              <TopDishes dataCook={dataCook} />
            ) : (
              <Empty
                text={"Không có món nào trong danh mục này"}
                visible={false}
                imageEmpty={AppResource.images.imgDefault}
                imageEmptyPercentWidth={30}
              />
            )}
          </div>
          <CategoryMenu title={"Các món tương tự"} />
          <div className="mt-3">
            {" "}
            <TopDishes dataCook={dataSame} title={"Bạn có thể tham khảo"} />
          </div>
        </Container>
      </AppLayout>
    </div>
  );
}

export default DetailCategory;
