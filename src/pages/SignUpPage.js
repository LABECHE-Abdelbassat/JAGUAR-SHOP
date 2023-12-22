import React, { useEffect } from 'react'
import { useRef } from 'react'
import { Alert, Button, Container, FloatingLabel, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../redux/actions/authAction'
import { useSignUpMutation } from '../reduxQuery/APIs/authApi'
import { Link, useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigation = useNavigate()
  const [signUp , {data , isError , isLoading , isSuccess , error}] = useSignUpMutation();

  const username = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  async function hundleClickSingUp(e) {
    const user = {
      name : username.current.value,
      email : email.current.value,
      password : password.current.value,
      passwordConfirm : confirmPassword.current.value,
      phone : phone.current.value,
    }
    await signUp(user);
  }

  useEffect(() => {
    localStorage.setItem("token",data?.token);
    if(data?.token.length > 5){
      switch (data?.data?.role) {
        case "admin":
            navigation("/admin/products", { replace: true })
          break;
        case "user":
            navigation("/", { replace: true })
          break;
      
        default:
          navigation("/", { replace: true })
          break;
      }
      
    }
  }, [data])
  

  return (
    <Container className='d-flex position-relative flex-column gap-2'>
      {isError ? <Alert style={{zIndex:"1000" , maxWidth:"calc(100% - 20px)"}} className='position-absolute' variant="danger" dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {error?.status==400 ? error?.data?.errors[0]?.msg : error?.data?.message}
        </p>
      </Alert> : ""}
      <h2 className='text-center text-black mb-3'>Hi There , Welcome</h2>
      <h5 style={{width:"350px"}} className=' m-auto fw-mediem text-center mb-4 text-gray'>please Enter Your Information to sing up</h5>
      <FloatingLabel
        controlId="floatingInput"
        label="User Name"
        className="mb-3 m-auto"
        style={{width:"350px"}}

      >
        <Form.Control ref={username} type="text" placeholder="Jone Smith" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 m-auto"
        style={{width:"350px"}}

      >
        <Form.Control ref={email} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3 m-auto"
        style={{width:"350px"}}

      >
        <Form.Control ref={phone} type="phone" placeholder="0627502458" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword"
      className="mb-3 m-auto"
      style={{width:"350px"}}
      label="Password">
        <Form.Control ref={password} type="password" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword"
      className="mb-1 m-auto"
      style={{width:"350px"}}
      label="Confirm Password">
        <Form.Control ref={confirmPassword} type="password" placeholder="Confirm Password" />
      </FloatingLabel>
      <Button onClick={hundleClickSingUp} className='m-auto py-2 mt-2 btn-success' style={{width:"350px"}}>Sign Up
      {isLoading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
      </Button>
      <p className='m-auto text-center fs-6 fw-semibold my-2 mb-0 color-main' style={{width:"400px" }}>You Have An Account</p>
      <Link className='m-auto mt-2' to={"/login"}>
        <Button className='py-2 btn-dark' style={{width:"350px"}}>Log In</Button>
      </Link>
    </Container>
  )
}

export default SignUpPage