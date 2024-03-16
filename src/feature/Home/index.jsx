import React from "react";
import AppLayout from "../../general/components/AppLayout";
import Banner from "./Banner";
import { Container } from "react-bootstrap";
import CategoryMenu from "./CategoryMenu";
import TopDishes from "./TopDishes";
import { AppData } from "../../general/components/AppData";
import _ from "lodash";
import SearchMenu from "./Search";

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
      </Container>
    </AppLayout>
  );
}

export default Home;
