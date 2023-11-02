import React, { useState } from 'react';
import { Button, Form, FormCheck } from 'react-bootstrap';
import MultiImageInput from 'react-multiple-image-input';
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { CirclePicker, SketchPicker } from 'react-color'


const AdminAddProduct = () => {
    const crop = {
        unit: '%',
        aspect: 3 / 4,
        width: '100'
      };
    
      const [images, setImages] = useState({});
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      const animatedComponents = makeAnimated();
  return (
    <div className=''>
      <h2 className='color-main mb-3'>Add New Product</h2>
        <MultiImageInput
      images={images}
      max={5}
      allowCrop={true}
      theme={{
        
        background: '#ffffff',
        outlineColor: '#aaaaaa',
        textColor: 'rgba(255,255,255,0.8)',
        buttonColor: '#338655',
        modalColor: '#111111'
      }}
      setImages={setImages}
      cropConfig={{ crop, ruleOfThirds: true }}
    />
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="product title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder='product description' rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="product price after discount" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="product price" />
            </Form.Group>
      <Select
        className='mt-3'
        closeMenuOnSelect={true}
        options={options}
        />
      <Select
        className='mt-3'
        closeMenuOnSelect={true}
        components={animatedComponents}
        isMulti
        options={options}
        />
        <Select
        className='mt-3'
        closeMenuOnSelect={true}
        options={options}
        />  
            <div class="gap-2 mt-3 d-flex" role="group" aria-label="Basic group">
              <label class=" color-item rounded-circle bg-warning" for="btnradio4"></label>
              <label class=" color-item rounded-circle bg-danger" for="btnradio5"></label>
              <label class=" color-item rounded-circle bg-dark" for="btnradio6"></label>
              <label class=" color-item rounded-circle bg-white border border-gray border-3 d-flex justify-content-center" for="btnradio6">+</label>
            </div>
            <div className='ms-auto w-50'>
    <Button className='mt-3 w-100  fw-semibold' variant='success' onClick={()=>{console.log(images)}}>ADD THE PRODUCT</Button>
    </div>

    </div>
  )
}

export default AdminAddProduct