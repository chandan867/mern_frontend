import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails,updateUserProfile} from "../actions/userAction";


function ProfileScreen({ location,history }) {
  const [name,setName]=useState('') 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message,setMessage]=useState(null)

  const dispatch=useDispatch()

  const userDetails=useSelector(state=>state.userDetails)
  const {error,user}=userDetails
  //loading in userDetails

  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin

  const userUpdateProfile=useSelector(state=>state.userUpdateProfile)
  const {success}=userUpdateProfile

  

  useEffect(()=>{
      if(!userInfo){
          history.push('/login')
      }
      else
      {
          if(!user.name)
          {
              dispatch(getUserDetails('profile'))
          }
          else
          {
              setName(user.name)
              setEmail(user.email)
          }
      }
  },[dispatch,history,userInfo,user])

  const submitHandler = (e) => {
    e.preventDefault();
    if(password!==confirmPassword)
    setMessage("passwords don't match")
    else
    {
        dispatch(updateUserProfile({id:user._id,name,email,password}))
        console.log("update")
    }
  
  };

  return (
   <Row>
       <Col md={3}>
       <h2>User Profile</h2>
        {message&&<h2>{message}</h2>}
    { error && <h3>{error}</h3>}
    {success&&<h3>profile updated..</h3>}
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
             Update
        </Button>
      </Form>
       </Col>
       <Col md={9}>
       <h2>my orders</h2>
       </Col>
   </Row>
  );
}

export default ProfileScreen;
