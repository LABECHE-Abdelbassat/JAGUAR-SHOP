import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificProduct } from '../redux/actions/productAction';
import { useEffect } from 'react';
import { useGetProductQuery } from '../reduxQuery/APIs/productApi';

const ProductDetailedHook = (id) => {
    const {data , isLoading} = useGetProductQuery(id);

    return data?.data
}

export default ProductDetailedHook