import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const CategorieItem = ({data}) => {
  const navigation = useNavigate();
  function hundleClickCategory(){
    localStorage.setItem("category",data._id);
    navigation("/result-page")
  }
  return (
    <div>
      <div style={{cursor:"pointer"}} onClick={hundleClickCategory} className='cat-img d-flex align-items-center justify-content-center bg-primary'>
        <img src={data.image} className='img-fluid'/>
      </div>
      <div style={{cursor:"pointer"}} onClick={hundleClickCategory} className='text-center fs-5 fw-semibold mt-2'>{data.name}</div>

    </div>
  )
}

export default CategorieItem