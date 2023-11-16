import React from 'react'
import { useRef } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigation = useNavigate()
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const userInfo= useSelector(state => state.AuthReducer.userInfo)

  function hundleClickLogIn(e) {
    e.preventDefault();
    const user = {
      email : email.current.value,
      password : password.current.value,
    }
    dispatch(logIn("/api/v1/auth/login",user))
    if(userInfo.token.length > 5){
    navigation("/");
    localStorage.setItem("token",userInfo.token)
    console.log(localStorage.getItem("token"))
    }
  }
  
  return (
    <Container className='d-flex flex-column gap-2'>
      <h2 className='text-center text-black mb-3'>Welcome Back</h2>
      <h5 className='text-center mb-4 text-gray'>welcome please login to your account</h5>
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
      <Button onClick={(e)=>{hundleClickLogIn(e)}} className='m-auto py-2 mt-2 btn-success' style={{width:"400px"}}>Log In</Button>
      <p className='m-auto text-center fs-6 fw-semibold my-2 mb-0 color-main' style={{width:"400px" }}>You Don't Have An Account</p>

      <Button className='m-auto py-2 mt-2 btn-dark' style={{width:"400px"}}>Sign Up</Button>
    </Container>
  )
}

export default LoginPage