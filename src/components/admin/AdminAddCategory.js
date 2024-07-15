import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useRef } from "react";
import galery from "../../images/galery.jpg";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../reduxQuery/APIs/categoryApi";
import ErrorMessage from "../all/ErrorMessage";
import SuccessMessage from "../all/SuccessMessage";
import { Link } from "react-router-dom";
const AdminAddCategory = () => {
  const [createCategory, { isLoading, isError, isSuccess, error }] =
    useCreateCategoryMutation();
  const [
    deleteCategory,
    { isError: deleteIsError, isSuccess: deleteSuccess, error: deleteError },
  ] = useDeleteCategoryMutation();
  const {
    data,
    isError: listIsError,
    error: listError,
    isLoading: listLoading,
  } = useGetAllCategoriesQuery();

  const categoryName = useRef();

  const [img, setimg] = useState(null);
  function hundleChange(event) {
    event.preventDefault();
    setimg(event.target.files[0]);
    if (event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }
  const imageis = useRef();
  const [image, setImage] = useState(galery);
  const hundleClickAdd = async () => {
    const formData = new FormData();
    formData.append("name", categoryName.current.value);
    formData.append("image", img);

    await createCategory(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      categoryName.current.value = "";
      setImage(galery);
    }
  }, [isSuccess]);

  async function hundleClickDeleteCategory(id) {
    await deleteCategory(id);
  }
  return (
    <div className="add-brand position-relative">
      <div style={{ direction: "rtl" }}>
        {isSuccess ? (
          <SuccessMessage message={"Category Created Successfully"} />
        ) : (
          ""
        )}
        {isError ? <ErrorMessage error={error} /> : ""}
      </div>
      <h4 className="color-main">Add Category</h4>
      <label className="my-3" style={{ cursor: "pointer" }} htmlFor="img">
        <img
          style={{ aspectRatio: "4/4", objectFit: "cover" }}
          src={image}
          alt="add img"
          width={130}
        />
      </label>
      <input
        id="img"
        style={{ display: "none" }}
        type="file"
        onChange={hundleChange}
        ref={imageis}
      />
      <Form.Group className="" as={Col} controlId="formGridPassword">
        <Form.Control
          ref={categoryName}
          type="text"
          placeholder="Category name"
        />
      </Form.Group>
      <Button
        onClick={hundleClickAdd}
        variant="success"
        className="w-100 d-flex align-items-center gap-3 justify-content-center mt-3"
      >
        Add Category
        {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
      </Button>

      <h4 className="my-3 color-main fw-semibold">All Categries</h4>
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
          NO CATEGORY FOUND
        </div>
      ) : (
        <Row>
          {data?.data?.map((item, index) => {
            return (
              <Link
                key={index}
                className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-3 pb-4"
                style={{ textDecoration: "none", color: "black" }}
                to={`/admin/categories/${item._id}`}
              >
                <div className="cat-img d-flex  align-items-center justify-content-center bg-primary">
                  <img
                    src={item?.image}
                    style={{ aspectRatio: "4/4", objectFit: "cover" }}
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="text-center fs-5 fw-semibold mt-2">
                  {item?.name}
                </div>
              </Link>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default AdminAddCategory;
