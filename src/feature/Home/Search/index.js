import React, { useState } from "react";
import BaseTextField from "../../../general/components/Forms/BaseTextField";
import { Button, Dropdown } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setValueFilter, setValueSearch } from "../../../app/searchSlice";
import { AppData } from "../../../general/components/AppData";
import _ from "lodash";

function SearchMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      valueSearch: "",
      valueFilter: [],
    },
    onSubmit: async (values) => {
      dispatch(setValueSearch(values.valueSearch));
      dispatch(setValueFilter(values.valueFilter));
      navigate(`/tim-kiem`);
    },
  });

  return (
    <div>
      <div
        className="mt-4 mb-3 d-flex align-items-center w-50 justify-content-center"
        style={{ margin: "0 auto" }}
      >
        <div className="flex-grow-1 me-0 me-md-3">
          <BaseTextField
            placeholder={"Hôm nay ăn gì ?"}
            name="valueSearch"
            type="text"
            fieldHelper={formik.getFieldHelpers("valueSearch")}
            fieldProps={formik.getFieldProps("valueSearch")}
            fieldMeta={formik.getFieldMeta("valueSearch")}
          />
        </div>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="me-2"
          >
            Lọc{" "}
            {formik?.values?.valueFilter?.length > 0
              ? "(" + formik?.values?.valueFilter?.length + ")"
              : ""}
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ width: "350px" }}>
            <div
              className="p-2"
              style={{ maxHeight: "50vh", minHeight: "200px" }}
            >
              <h6>Nguyên liệu:</h6>
              {AppData.dataFilter?.map((item, index) => (
                <div key={index}>
                  <h6>{item?.name}</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {item?.data?.map((i, indexKey) => (
                      <div className="d-flex align-items-center" key={indexKey}>
                        <p className="mb-0 me-2">{i?.name}</p>
                        <input
                          type="checkbox"
                          className="mt-1"
                          checked={_.some(formik.values.valueFilter, {
                            id: i?.id,
                          })}
                          onChange={(e) => {
                            if (e.target.checked) {
                              formik.setFieldValue("valueFilter", [
                                ...formik.values.valueFilter,
                                i,
                              ]);
                            } else {
                              let arrayNew = _.filter(
                                formik.values.valueFilter,
                                (a) => a.id !== i?.id
                              );
                              formik.setFieldValue("valueFilter", arrayNew);
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex gap-2 justify-content-end mt-2 px-2">
              <Dropdown.Item
                className="text-center py-1 bg-danger rounded text-white hover-opacity-80"
                onClick={() => {
                  formik.setFieldValue("valueFilter", []);
                }}
              >
                Hủy
              </Dropdown.Item>
              <Dropdown.Item className="text-center py-1 bg-primary rounded text-white hover-opacity-80">
                Chọn
              </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>

        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
}

export default SearchMenu;
