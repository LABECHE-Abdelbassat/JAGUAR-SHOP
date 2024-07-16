import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/productAction";
import { useGetAllProductsQuery } from "../../reduxQuery/APIs/productApi";

const PaginationComponent = ({ modifyPage, paginationResult }) => {
  const handlePageClick = (event) => {
    modifyPage(event.selected + 1);
    window.location.href = "#scroll";
  };
  return (
    <div className="paginnoneselect">
      {paginationResult?.numberOfPages > 1 ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          pageCount={paginationResult?.numberOfPages}
          previousLabel="<"
          containerClassName={"pagination justify-content-center p-3"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PaginationComponent;
