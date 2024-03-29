import React from "react";
import Header from "../../../feature/Header";
import Footer from "../../../feature/Footer";

function AppLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ overflow: "auto" }}>
      <div>
        <Header />
      </div>
      <div className="flex-grow-1">{children}</div>
      <div className="pt-3">
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
