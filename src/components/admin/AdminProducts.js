import React from "react";
import { Form, Spinner } from "react-bootstrap";
import ProductItemAdmin from "./ProductItemAdmin";
import Pagination from "../all/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../redux/actions/productAction";
import PaginationComponent from "../all/Pagination";
import { Link, useLocation } from "react-router-dom";
import { useGetAllProductsQuery } from "../../reduxQuery/APIs/productApi";
import ErrorMessage from "../all/ErrorMessage";

const AdminProducts = ({ keyword }) => {
  const [page, setpage] = useState(1);
  const [params, setparams] = useState("&sort=-ratingsAverage");
  const { data, isLoading, isError, error } = useGetAllProductsQuery(
    `?page=${page}&keyword=${keyword}${params}`
  );

  function modifyPage(page) {
    setpage(page);
  }

  const location = useLocation();
  const locationdata = location.state?.navigateData;
  const [isDes, setisDes] = useState(false);
  const [ordertext, setordertext] = useState("");

  function hundleChangeOrderOption(e) {
    let order = "";
    setordertext(e.target.value);
    if (isDes) {
      order = `&sort=${e.target.value}`;
    } else {
      order = `&sort=-${e.target.value}`;
    }
    setparams(order);
  }
  function hundleChangeIsDes(e) {
    if (e.target.checked) {
      setisDes(true);
      setparams(`&sort=${ordertext}`);
    } else {
      setisDes(false);
      setparams(`&sort=-${ordertext}`);
    }
  }

  return (
    <div className="position-relative text-center">
      <div style={{ direction: "rtl" }}>
        {isError ? <ErrorMessage error={error} /> : ""}
      </div>
      <div>
        <div className="mb-2 align-items-center">
          <div className="d-flex admin-wrap justify-content-between gap-3 align-items-center">
            <div className="text-main mt-3 fs-4">Manage Your Products</div>
            <div className=" mt-3 line"></div>
            <div className="d-flex mt-4 align-items-center gap-3">
              {locationdata?.length > 0 ? (
                <Form.Select
                  onChange={hundleChangeOrderOption}
                  className="mb-2"
                  aria-label="Default select example"
                >
                  <option>Ordered By</option>
                  <option value="price">price</option>
                  <option value="quantity">quantity</option>
                  <option selected value="ratingsAverage">
                    ratingsAverage
                  </option>
                  <option value="ratingsQuantity">ratingsQuantity</option>
                </Form.Select>
              ) : (
                <Form.Select
                  onChange={hundleChangeOrderOption}
                  className="mb-2"
                  aria-label="Default select example"
                >
                  <option>Ordered By</option>
                  <option value="price">price</option>
                  <option value="quantity">quantity</option>
                  <option value="ratingsAverage">ratingsAverage</option>
                  <option value="ratingsQuantity">ratingsQuantity</option>
                </Form.Select>
              )}

              <Form.Check
                type={"checkbox"}
                value={`des`}
                className="mb-2"
                onChange={hundleChangeIsDes}
                id={`brand-checkbox`}
                label={`Ascending`}
              />
            </div>
            <Link
              to={"/admin/addproduct"}
              className="mt-3 "
              style={{ textDecoration: "none" }}
            >
              <button className="see-more-btn fs-6">Add Product</button>
            </Link>
          </div>
        </div>
        {isLoading ? (
          <Spinner size="lg" variant="success" className="mt-4 ms-3"></Spinner>
        ) : data?.data?.length < 1 ? (
          <div className="text-main m-0 mb-4 p-0 fs-5">NO PRODUCT FOUND</div>
        ) : (
          <div>
            <div className="row mt-4">
              {data?.data.map((item) => {
                return (
                  <div className="col-12 admin col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 text-center mb-3 pb-4">
                    <ProductItemAdmin
                      product={item}
                      page={data.paginationResult.currentPage}
                    />
                  </div>
                );
              })}
            </div>
            <PaginationComponent
              modifyPage={modifyPage}
              paginationResult={data?.paginationResult}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
