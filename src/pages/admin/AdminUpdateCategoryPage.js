import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import galery from "../../images/galery.jpg";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "../../reduxQuery/APIs/categoryApi";
import { useGetAllSubCategoriesOnCategoryQuery } from "../../reduxQuery/APIs/subCategoryApi";
import SuccessMessage from "../../components/all/SuccessMessage";
import ErrorMessage from "../../components/all/ErrorMessage";
import { Link, useNavigate, useParams } from "react-router-dom";
const AdminUpdateCategoryPage = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [updateCategory, { isLoading, isError, isSuccess, error }] =
    useUpdateCategoryMutation();
  const [
    deleteCategory,
    {
      isError: deleteIsError,
      isSuccess: deleteSuccess,
      isLoading: deleteLoading,
      error: deleteError,
    },
  ] = useDeleteCategoryMutation();
  const {
    data,
    isError: listIsError,
    error: listError,
    isLoading: listLoading,
  } = useGetAllSubCategoriesOnCategoryQuery(id);
  const {
    data: itemData,
    isError: itemIsError,
    error: itemError,
    isLoading: itemLoading,
  } = useGetCategoryQuery(id);

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
  const [image, setImage] = useState();
  const hundleClickUpdate = async () => {
    const formData = new FormData();
    if (categoryName.current.value.length > 0) {
      formData.append("name", categoryName.current.value);
    }
    setTimeout(() => {
      formData.append("image", img);
    }, 1000);
    setTimeout(async () => {
      await updateCategory({ id: id, category: formData });
    }, 1000);
  };
  useEffect(() => {
    setImage(itemData?.data?.image);
    setimg(itemData?.data?.image);
  }, [itemData]);

  useEffect(() => {
    if (isSuccess) {
      categoryName.current.value = "";
      setImage(galery);
    }
  }, [isSuccess]);

  async function hundleClickDeleteCategory() {
    await deleteCategory(id);
  }
  useEffect(() => {
    if (deleteSuccess) {
      navigate("/admin/categories");
    }
  }, [deleteSuccess]);
  return (
    <Container>
      <div className="add-brand position-relative">
        <div style={{ direction: "rtl" }}>
          {deleteSuccess ? (
            <SuccessMessage message={"Category Deleted Successfully"} />
          ) : (
            ""
          )}
          {deleteIsError ? <ErrorMessage error={deleteError} /> : ""}
        </div>
        {isSuccess ? (
          <SuccessMessage message={"Category Updated Successfully"} />
        ) : (
          ""
        )}
        {isError ? <ErrorMessage error={error} /> : ""}
        <h4 className="color-main">Category Information</h4>
        <label className="my-3" style={{ cursor: "pointer" }} htmlFor="img">
          <img src={image} width={130} />
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
            ref={categoryName}
            type="text"
            placeholder="Category name"
          />
        </Form.Group>
        <Button
          onClick={hundleClickUpdate}
          variant="success"
          className="w-100 d-flex align-items-center gap-3 justify-content-center mt-3"
        >
          Update Category
          {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </Button>
        <Button
          onClick={hundleClickDeleteCategory}
          variant="dark"
          className="w-100 d-flex align-items-center gap-3 justify-content-center mt-3"
        >
          Delete This Category
          {deleteLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </Button>

        <h4 className="mt-3 color-main fw-semibold">
          All SubCategries for {itemData?.data?.name}
        </h4>
        {listLoading ? (
          <div className="text-center">
            <Spinner
              size="lg"
              variant="success"
              className="mt-4 align-self-center"
            ></Spinner>
          </div>
        ) : (
          <Row>
            {data?.data?.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="col-12 col-md-6 text-center "
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
          </Row>
        )}
      </div>
    </Container>
  );
};

export default AdminUpdateCategoryPage;
