import React from 'react'
import StartReview from '../all/StartReview'
import { Card } from 'react-bootstrap'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProducts, getSpecificProduct } from '../../redux/actions/productAction'
import { useDeleteProductMutation } from '../../reduxQuery/APIs/productApi'
import SuccessMessage from '../all/SuccessMessage'
import ErrorMessage from '../all/ErrorMessage'

const ProductItemAdmin = ({product , page}) => {
  const [deleteProduct , {isError , isSuccess , error ,isLoading}]= useDeleteProductMutation();
  function hundleClickDelete() {
    deleteProduct(product._id);
    // dispatch(deleteProduct(`/api/v1/products/${product._id}`,token))
    // dispatch(getAllProducts(`/api/v1/products?page=${page}`))
  }
  function hundleClicktoUpdate(){
    // dispatch(getSpecificProduct(`/api/v1/products/${product.id}`))
  }
  return (
    <div className='product-item'>
      {isSuccess ? <SuccessMessage message={"Product Deleted Successfully"}/>:""}
      {isError ? <ErrorMessage error={error}/> : ""}
      <div className='p-relative' style={{position:"relative" , overflow:"hidden"}}>
        <Link style={{textDecoration:"none"}} to={`/admin/product/${product._id}`}>
          <Card.Img className='card-img-item'  variant="top" src={product.imageCover} />
        </Link>
        <Link style={{textDecoration:"none"}} to={`/admin/update-product/${product._id}`}>
          <button onClick={hundleClicktoUpdate} className='add-cart-btn'>Update Product</button>
        </Link>
          <button onClick={hundleClickDelete} className='delete-btn'><Icon className='icon-product' icon="fluent:delete-12-filled"  color='#666' width="25" height="25" /></button>

      </div>
      <Card.Body>
        <Card.Title className='text-start product-desc text-success mt-3'>Card Title in here we put the descriptio of the product so in here we can do this of the end</Card.Title>
        <div className='row mt-3'>
          
          <div className='col d-flex align-items-end text-start'>
            450$
          </div>
          <div className='col text-end review'>
            <StartReview readOnly={true} size={20} initialValue={1.4}/>
          </div>
          

        </div>
        
      </Card.Body>
    </div>
  )
}

export default ProductItemAdmin