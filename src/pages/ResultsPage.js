import React, { useEffect, useState } from "react";
import CategoriesNav from "../components/results-page/CategoriesNav";
import { Container, Spinner } from "react-bootstrap";
import Filter from "../components/results-page/Filter";
import ProductResultLine from "../components/results-page/ProductResultLine";
import { useGetAllProductsQuery } from "../reduxQuery/APIs/productApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResultsPage = () => {
  const searchWord = useParams().keyword;
  const categoryWord = localStorage.getItem("category");
  const [keyword, setkeyword] = useState("");
  const [cat, setcat] = useState("");
  const [page, setpage] = useState(1);

  useEffect(() => {
    if (searchWord?.length > 0) {
      setkeyword(`&keyword=${searchWord}`);
    } else {
      setkeyword("");
    }
    if (categoryWord?.length > 0) {
      setcat(`&category=${categoryWord}`);
    } else {
      setcat("");
    }
  }, [searchWord, categoryWord]);
  useEffect(() => {
    setparams(`?page=${page}`);
  }, [page]);

  const [order, setorder] = useState("");
  const [filter, setfilter] = useState("");
  const [params, setparams] = useState(`?page=${page}`);
  function modifyPage(page) {
    setpage(page);
  }
  function modifyOrder(order) {
    setorder(order);
  }
  function modifyFilter(filter) {
    setfilter(filter);
  }
  function modifyCat(cat) {
    setcat(cat);
  }
  const { data, isLoading, isFetching, isError, error } =
    useGetAllProductsQuery(`${params}${order}${keyword}${cat}${filter}`);

  useEffect(() => {
    if (isError) {
      toast.error(
        error?.status === 400
          ? error?.data?.errors[0]?.msg
          : error?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [isError, error]);
  return (
    <Container style={{ overflow: "hidden" }} className="position-relative">
      <CategoriesNav modifyCat={modifyCat} cattext={categoryWord} />
      <div className="row mt-2">
        <div className="col-0 col-md-3 col-lg-2">
          <Filter modifyFilter={modifyFilter} />
        </div>
        {isLoading ? (
          <div className="text-center col-12 col-md-9 col-lg-10">
            <Spinner size="lg" variant="success" className="mt-4 "></Spinner>
          </div>
        ) : (
          <div className="col-12 col-md-9 col-lg-10">
            <div id="scroll"></div>

            <ProductResultLine
              modifyOrder={modifyOrder}
              isFetching={isFetching}
              modifyPage={modifyPage}
              data={data}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default ResultsPage;
