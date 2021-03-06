import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { register} from "../actions/userAction";

function RegisterScreen({ location,history }) {
  const [name,setName]=useState('') 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message,setMessage]=useState(null)
  const dispatch=useDispatch()
  const userRegister=useSelector(state=>state.userRegister)
//loading in userRegister
  const {error,userInfo}=userRegister

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(()=>{
      if(userInfo){
          history.push(redirect)
      }
  },[history,userInfo,redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    if(password!==confirmPassword)
    setMessage("passwords don't match")
    else
    {
        dispatch(register(name,email,password))
        console.log("register")
    }
  
  };

  return (
    <FormContainer>
        <h1>Sign Up</h1>
        {message&&<h2>{message}</h2>}
      { error && <h3>{error}</h3>}
      <Form onClick={submitHandler}>
      <Form.Group controlId="Name">
          <Form.Label>Name address</Form.Label>
          <Form.Control
            type="name"
            placeholder="Name "
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
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
        <Form.Group controlId=" ConfirmPassword">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          >   
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
         Register
        </Button>
      </Form>
      <Row className='py-6'>
        <Col>
         Have an Account?{" "}
          <Link to={redirect ? `login?redirect=${redirect}` :'/login'}>
           Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default RegisterScreen;
