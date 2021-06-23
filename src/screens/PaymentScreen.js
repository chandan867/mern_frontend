import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { saveShippingAddress } from "../actions/cartActions";
import { savePaymentMethod } from "../actions/cartActions";

import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";

function PaymentScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submit")
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h3>Payment Method</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
  
        <Col>
        <Form.Check type='radio' label='payPal or Credit Card'
         id='payPal' name='paymentMethod' value='payPal'
         checked onChange={(e)=>setPaymentMethod(e.target.value)}>

        </Form.Check>
        {/* <Form.Check type='radio' label='otherMethod' id='otherMethod' name='paymentMethod' value='otherMethod'
         onChange={(e)=>setPaymentMethod(e.target.value)}>

        </Form.Check> */}
        
        </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          {" "}
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
