import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import galery from "../../images/galery.jpg";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "../../reduxQuery/APIs/categoryApi";
import { useGetAllSubCategoriesOnCategoryQuery } from "../../reduxQuery/APIs/subCategoryApi";
import SuccessMessage from "../../components/all/SuccessMessage";
import ErrorMessage from "../../components/all/ErrorMessage";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBrandMutation,
  useGetBrandQuery,
  useUpdateBrandMutation,
} from "../../reduxQuery/APIs/brandApi";
import { updateBrand } from "./../../redux/actions/brandAction";
const AdminUpdateBrandPage = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [updateBrand, { isLoading, isError, isSuccess, error }] =
    useUpdateBrandMutation();
  const [
    deleteBrand,
    {
      isError: deleteIsError,
      isSuccess: deleteSuccess,
      isLoading: deleteLoading,
      error: deleteError,
    },
  ] = useDeleteBrandMutation();
  const {
    data: itemData,
    isError: itemIsError,
    error: itemError,
    isLoading: itemLoading,
  } = useGetBrandQuery(id);

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
  const [image, setImage] = useState();
  const hundleClickUpdate = async () => {
    const formData = new FormData();
    if (brandName.current.value.length > 0) {
      formData.append("name", brandName.current.value);
    }
    setTimeout(() => {
      formData.append("image", img);
    }, 1000);
    setTimeout(async () => {
      await updateBrand({ id: id, brand: formData });
    }, 1000);
  };
  useEffect(() => {
    setImage(itemData?.data?.image);
    setimg(itemData?.data?.image);
  }, [itemData]);

  useEffect(() => {
    if (isSuccess) {
      brandName.current.value = "";
      setImage(galery);
    }
  }, [isSuccess]);

  async function hundleClickDeleteCategory() {
    await deleteBrand(id);
  }
  useEffect(() => {
    if (deleteSuccess) {
      navigate("/admin/brands");
    }
  }, [deleteSuccess]);
  return (
    <Container>
      <div className="add-brand position-relative">
        <div style={{ direction: "rtl" }}>
          {deleteSuccess ? (
            <SuccessMessage message={"Brand Deleted Successfully"} />
          ) : (
            ""
          )}
          {deleteIsError ? <ErrorMessage error={deleteError} /> : ""}
        </div>
        {isSuccess ? (
          <SuccessMessage message={"Brand Updated Successfully"} />
        ) : (
          ""
        )}
        {isError ? <ErrorMessage error={error} /> : ""}
        <h4 className="color-main">Brand Information</h4>
        <label className="my-3" style={{ cursor: "pointer" }} htmlFor="img">
          <img src={image} alt="Slect Image" width={130} />
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
            defaultValue={itemData?.data?.name}
            ref={brandName}
            type="text"
            placeholder="Brand name"
          />
        </Form.Group>
        <Button
          onClick={hundleClickUpdate}
          variant="success"
          className="w-100 d-flex align-items-center gap-3 justify-content-center mt-3"
        >
          Update Brand
          {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </Button>
        <Button
          onClick={hundleClickDeleteCategory}
          variant="danger"
          className="w-100 d-flex align-items-center gap-3 justify-content-center mt-3"
        >
          Delete This Brand
          {deleteLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </Button>
      </div>
    </Container>
  );
};

export default AdminUpdateBrandPage;
