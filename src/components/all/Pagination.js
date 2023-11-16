import React from 'react'
import ReactPaginate from "react-paginate";
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productAction';

const PaginationComponent = ({paginationResult}) => {
    const dispatch = useDispatch();
    const handlePageClick = (event) => { 
        console.log(event.selected);
        dispatch(getAllProducts(`/api/v1/products?page=${event.selected + 1}`))


    };
    return (
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
    )
}

export default PaginationComponent
