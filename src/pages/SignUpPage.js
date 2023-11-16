import React from 'react'
import { useRef } from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../redux/actions/authAction'

const SignUpPage = () => {
  const dispatch = useDispatch();
  const user= useSelector(state => state.AuthReducer.data)

  const username = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  function hundleClickSingUp() {
    const user = {
      name : username.current.value,
      email : email.current.value,
      password : password.current.value,
      passwordConfirm : confirmPassword.current.value,
      phone : phone.current.value,
    }
    console.log(user)
    dispatch(signUp("/api/v1/auth/signup",user))
  }


  return (
    <Container className='d-flex flex-column gap-2'>
      <h2 className='text-center text-black mb-3'>Hi There , Welcome</h2>
      <h5 style={{width:"350px"}} className=' m-auto fw-light text-center mb-4 text-gray'>welcome please Enter Your Information to sing up</h5>
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
      <Button onClick={hundleClickSingUp} className='m-auto py-2 mt-2 btn-success' style={{width:"350px"}}>Sign Up</Button>
      <p className='m-auto text-center fs-5 fw-semibold my-3' style={{width:"350px" }}>You have An Account</p>

      <Button className='m-auto py-2 mt-2 btn-dark' style={{width:"350px"}}>Log In</Button>
    </Container>
  )
}

export default SignUpPage