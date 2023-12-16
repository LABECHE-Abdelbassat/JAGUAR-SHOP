import React from 'react'
import { Alert } from 'react-bootstrap'

const SuccessMessage = ({message}) => {
  return (
        <Alert style={{zIndex:"1000" , maxWidth:"calc(100% - 20px)"}} className='position-absolute top-0 end-0' variant="success" dismissible>
        <Alert.Heading>Success!</Alert.Heading>
        <p>
            {message}
        </p>
      </Alert>
  )
}

export default SuccessMessage