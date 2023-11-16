import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificProduct } from '../redux/actions/productAction';
import { useEffect } from 'react';

const ProductDetailedHook = (id) => {
    const product = useSelector(state=>state.ProductReducer.specificProduct);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getSpecificProduct(`/api/v1/products/${id}`))
    }, [])

    return product.data
}

export default ProductDetailedHook