import React, { useEffect } from 'react'
import { useRef } from 'react';
import { Button, Container, FloatingLabel, Form, Spinner, Toast } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/actions/authAction';
import { Link, useNavigate } from 'react-router-dom';
import { useLogInMutation } from '../reduxQuery/APIs/authApi';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import ErrorMessage from '../components/all/ErrorMessage';

const LoginPage = () => {
  const navigation = useNavigate()
  const [login , {data , isError , isLoading , isSuccess , error}] = useLogInMutation();
  const email = useRef(null);
  const password = useRef(null);
  
  async function hundleClickLogIn(e) {
    e.preventDefault();
    const user = {
      email : email.current.value,
      password : password.current.value,
    }
    await login(user);
  }
  useEffect(() => {
    localStorage.setItem("token",data?.token);
    if(isSuccess){
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
      {isError ? <ErrorMessage error={error}/> : ""}

      <h2 className='text-center text-black mb-3'>Welcome Back</h2>
      <h5 className='text-center mb-4 text-gray'>please login to your account</h5>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 m-auto"
        style={{width:"400px"}}

      >
        <Form.Control ref={email} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword"
      className="mb-1 m-auto"
      style={{width:"400px"}}
      label="Password">
        <Form.Control ref={password} type="password" placeholder="Password" />
      </FloatingLabel>
      <a className='m-auto text-end' style={{width:"400px" , textDecoration:"none" }}>Forget Password?</a>
      <Button onClick={(e)=>{hundleClickLogIn(e)}} className='m-auto py-2 mt-2 btn-success' style={{width:"400px"}}>
        Log In
        {isLoading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
      </Button>
      <p className='m-auto text-center fs-6 fw-semibold my-2 mb-0 color-main' style={{width:"400px" }}>You Don't Have An Account</p>
      <Link className='m-auto mt-2' to={"/sign-up"}>
        <Button className='m-auto py-2 mt-2 btn-dark' style={{width:"400px"}}>Sign Up</Button>
      </Link>
    </Container>
  )
}

export default LoginPage