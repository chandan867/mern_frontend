import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userAction";

function LoginScreen({ location,history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)

  const {error,userInfo}=userLogin  //loading

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(()=>{
      if(userInfo){
          history.push(redirect)
      }
  },[history,userInfo,redirect])

  const submitHandler = (e) => {
    e.preventDefault();
   dispatch(login(email,password))
   console.log("logging")
  };

  return (
    <FormContainer>
      { error && <h3>{error}</h3>}
      <Form onClick={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >   
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row className='py-6'>
        <Col>
          New User?{" "}
          <Link to={redirect ? `register?redirect=${redirect}` :'/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
