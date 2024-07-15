import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import AdminImageInput from "./AdminImageInput";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, setTrue } from "../../redux/actions/categoryAction";
import galery from "../../images/galery.jpg";
import { createBrand } from "./../../redux/actions/brandAction";
import {
  useCreateBrandMutation,
  useDeleteBrandMutation,
  useGetAllBrandsQuery,
} from "../../reduxQuery/APIs/brandApi";
import SuccessMessage from "../all/SuccessMessage";
import ErrorMessage from "../all/ErrorMessage";
import { Link } from "react-router-dom";

const AdminAddBrand = () => {
  const [createBrand, { isLoading, isError, isSuccess, error }] =
    useCreateBrandMutation();
  const [
    deleteBrand,
    { isError: deleteIsError, isSuccess: deleteSuccess, error: deleteError },
  ] = useDeleteBrandMutation();
  const {
    data,
    isError: listIsError,
    error: listError,
    isLoading: listLoading,
  } = useGetAllBrandsQuery();

  const brandName = useRef();

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
    formData.append("name", brandName.current.value);
    formData.append("image", img);
    await createBrand(formData);
  };
  useEffect(() => {
    if (isSuccess) {
      brandName.current.value = "";
      setImage(galery);
    }
  }, [isSuccess]);

  async function hundleClickDeleteBrand(id) {
    await deleteBrand(id);
  }

  return (
    <div className="position-relative add-brand">
      <div style={{ direction: "rtl" }}>
        {isSuccess ? (
          <SuccessMessage message={"Brand Created Successfully"} />
        ) : (
          ""
        )}
        {isError ? <ErrorMessage error={error} /> : ""}
      </div>
      <h4 className="color-main">Add Brand</h4>
      <label className="my-3" style={{ cursor: "pointer" }} htmlFor="img">
        <img
          src={image}
          alt="add img"
          style={{ aspectRatio: "5/4", objectFit: "cover" }}
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
        <Form.Control ref={brandName} type="text" placeholder="Brand name" />
      </Form.Group>
      <Button
        onClick={hundleClickAdd}
        variant="success"
        className="w-100 d-flex align-items-center gap-3 justify-content-center mt-3"
      >
        Add Brand
        {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
      </Button>

      <h4 className="my-3 color-main fw-semibold">All Brands</h4>
      {listLoading ? (
        <div className="text-center">
          <Spinner
            size="lg"
            variant="success"
            className="mt-4 align-self-center"
          ></Spinner>
        </div>
      ) : data?.data?.length < 1 ? (
        <div className="text-main text-center m-0 p-0 fs-5">NO BRAND FOUND</div>
      ) : (
        <Row>
          {data?.data?.map((item, index) => {
            return (
              <Link
                key={index}
                className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-3 pb-4"
                style={{ textDecoration: "none", color: "black" }}
                to={`/admin/brands/${item._id}`}
              >
                <div className="d-flex align-items-center justify-content-center rounded-3 bg-light">
                  <img
                    src={item?.image}
                    style={{ aspectRatio: "5/4", objectFit: "cover" }}
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div
                  style={{ textWrap: "nowrap" }}
                  className="text-center brand-title fs-5 fw-semibold mt-2"
                >
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

export default AdminAddBrand;
