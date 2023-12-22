import React from 'react'
import { useNavigate } from 'react-router-dom';

const BrandItem = ({data}) => {
  const navigation = useNavigate();
  function hundleClickBrand(){
    localStorage.setItem("brand",data._id);
    navigation("/result-page",{preventScrollReset:false})
  }
  return (
    <div>
      <div style={{cursor:"pointer"}} onClick={hundleClickBrand} className='d-flex brand-img align-items-center justify-content-center rounded-3 bg-light'>
        <img src={data.image} className='img-fluid'/>
      </div>
    </div>
  )
}

export default BrandItem