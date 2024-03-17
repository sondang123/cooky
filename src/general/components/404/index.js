import React from "react";
import AppLayout from "../AppLayout";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <AppLayout>
        <div className="d-flex align-items-center justify-content-center h-100 flex-column">
          {" "}
          <h1>404 Not Found </h1>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Trang chủ
          </button>
        </div>
      </AppLayout>
    </div>
  );
}

export default NotFound;
