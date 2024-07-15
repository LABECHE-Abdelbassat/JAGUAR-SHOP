import React, { useEffect } from "react";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import Select from "react-select";
import { useRef } from "react";
import { useState } from "react";
import { useGetAllCategoriesQuery } from "../../reduxQuery/APIs/categoryApi";
import {
  useCreateSubCategoryMutation,
  useGetAllSubCategoriesQuery,
} from "../../reduxQuery/APIs/subCategoryApi";
import SuccessMessage from "../all/SuccessMessage";
import ErrorMessage from "../all/ErrorMessage";
import { Link } from "react-router-dom";

const AdminAddSubCategory = () => {
  const subCategoryName = useRef();
  const catinput = useRef();
  const [categoryOf, setcategoryOf] = useState(null);

  const { data: categories, isSuccess: categoryIsSuccess } =
    useGetAllCategoriesQuery();
  const [createSubCategory, { isLoading, isError, error, isSuccess }] =
    useCreateSubCategoryMutation();
  const {
    data,
    isError: listIsError,
    error: listError,
    isLoading: listLoading,
  } = useGetAllSubCategoriesQuery();

  const [options, setoptions] = useState([]);

  function hundleonChange(selected) {
    setcategoryOf(selected.value);
  }
  const hundleClickAdd = async () => {
    const subCategoryObj = {
      name: subCategoryName.current.value,
      category: categoryOf,
    };
    await createSubCategory(subCategoryObj);
  };

  useEffect(() => {
    if (categoryIsSuccess) {
      const optionss = [];
      categories?.data.forEach((category) => {
        optionss.push({ value: category._id, label: category.name });
      });
      setoptions(optionss);
    }
  }, [categories, categoryIsSuccess]);

  useEffect(() => {
    if (isSuccess) {
      subCategoryName.current.value = "";
      catinput.current.setValue([]);
    }
  }, [isSuccess]);

  return (
    <div className="position-relative add-brand">
      <div style={{ direction: "rtl" }}>
        {isSuccess ? (
          <SuccessMessage message={"Sub Category Created Successfully"} />
        ) : (
          ""
        )}
        {isError ? <ErrorMessage error={error} /> : ""}
      </div>
      <h4 className="color-main">Add SubCategory</h4>

      <Form.Group className="mt-3" as={Col}>
        <Form.Control
          ref={subCategoryName}
          type="text"
          placeholder="subCategory name"
        />
      </Form.Group>
      <Select
        className="mt-3"
        ref={catinput}
        onChange={hundleonChange}
        closeMenuOnSelect={true}
        options={options}
        placeholder={"Select Category..."}
      />
      <Button
        onClick={hundleClickAdd}
        variant="success"
        className="w-100 d-flex align-items-center gap-3 justify-content-center mt-3"
      >
        Add SubCategory
        {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
      </Button>
      <h4 className="my-3 color-main fw-semibold">All Sub Categries</h4>
      {listLoading ? (
        <div className="text-center">
          <Spinner
            size="lg"
            variant="success"
            className="mt-4 align-self-center"
          ></Spinner>
        </div>
      ) : data?.data?.length < 1 ? (
        <div className="text-main text-center m-0 p-0 fs-5">
          NO SUB CATEGORY FOUND
        </div>
      ) : (
        <div>
          {data?.data?.map((item, index) => {
            return (
              <Link
                key={index}
                className="col-6 col-sm-4 col-md-3 mt-3 col-lg-2 text-center mb-3 pb-4"
                style={{ textDecoration: "none", color: "black" }}
                to={`/admin/subcategories/${item._id}`}
              >
                <Card className="mt-3 p-3 text-start">
                  <div className="mb-2">
                    <strong>Sub Category Name : </strong>
                    {item.name}
                  </div>

                  <div>
                    <strong>Related Category : </strong>
                    {item?.category?.name}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminAddSubCategory;
