import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap';
import MultiImageInput from 'react-multiple-image-input';

const AdminAddCategory = () => {
    const [images, setImages] = useState({});
    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
      };
  return (
    <div className='add-brand'>
      <h4 className='color-main'>Add Category</h4>
        <MultiImageInput
      images={images}
      max={1}
      allowCrop={true}
      theme={{
        
        background: '#ffffff',
        outlineColor: '#111111',
        textColor: 'rgba(255,255,255,0.8)',
        buttonColor: '#338655',
        modalColor: '#111111'
      }}
      setImages={setImages}
      cropConfig={{ crop, ruleOfThirds: true }}
    />
    <Form.Group className='' as={Col} controlId="formGridPassword">
                <Form.Control type='text' placeholder="Category name" />
            </Form.Group>
    <Button variant='success' className='w-100 mt-3'>Add Category</Button>
    </div>
  )
}

export default AdminAddCategory