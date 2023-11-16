import React from 'react'
import MultiImageInput from 'react-multiple-image-input';

const AdminImageInput = ({images , setImages , crop , max}) => {
  return (
    <MultiImageInput
      images={images}
      max={max}
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
  )
}

export default AdminImageInput