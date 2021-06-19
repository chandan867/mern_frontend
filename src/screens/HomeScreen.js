import React,{useState,useEffect} from "react";
import { useDispatch,useSelector} from "react-redux"
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import {listProducts} from "../actions/productActions" 

//import axios from 'axios'   // now use redux
//import products from "../products";

// function HomeScreen() {
//   // console.log(products[0])
//   // console.log(12)
//   //  har ek product ke liye Product component ko call kr rha with prop producct*/
//    // const[products,setProducts]=useState([])  
//    useEffect(() => {
   
//     // const fetchProduct=async()=>{
//     //   const {data}=await axios.get('/api/products')
//     //  setProducts(data);
     
//     }
//        fetchProduct();
//      },[])  
//      console.log(products)
function HomeScreen() {
   const dispatch=useDispatch();
   const productList=useSelector(state=>state.productList)
   const {loading,error,products}=productList
   useEffect(() => {
     dispatch(listProducts())
      
     },[dispatch])  
    
  return (
    <>
      <h1>latest products</h1>
      {loading?<h1>loading....</h1>:error?<h3>{error}</h3>:
      
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={6} xl={3}>
            <Product product={product} />  
          
          </Col>
        ))}
      </Row>}
    </>
  );
}

export default HomeScreen;
    
//debug required at 3.3