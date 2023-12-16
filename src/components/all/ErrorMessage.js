import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({error}) => {
  const variant = "" ;
  return (
    <Alert style={{zIndex:"1000",direction:"ltr" ,top:"20px", maxWidth:"calc(100% - 24px)"}} className='position-fixed' variant={(error.status==400) ? "warning" : "danger"} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {error?.status==400 ? error?.data?.errors[0]?.msg : error?.data?.message}
        </p>
      </Alert>
  )
}

export default ErrorMessage