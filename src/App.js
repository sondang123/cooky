import logo from "./logo.svg";
import "./App.css";
import { Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./feature/Home";
import DetailCategory from "./feature/DetailCategory";
import DetailDish from "./feature/DetailDish";
import SearchScreen from "./feature/Search";
import NotFound from "./general/components/404";
function App() {
  return (
    <>
      {/* Router */}
      <BrowserRouter>
        {/* Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route
              path="/danh-muc/:id"
              element={<DetailCategory></DetailCategory>}
            />
            <Route
              path="/chi-tiet-mon/:id"
              element={<DetailDish></DetailDish>}
            />
            <Route path="/tim-kiem" element={<SearchScreen></SearchScreen>} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
