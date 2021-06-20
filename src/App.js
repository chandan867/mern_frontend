import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router,Route} from "react-router-dom"
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";





function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
        < Route path='/login' component={LoginScreen} exact/>
        < Route path='/register' component={RegisterScreen} exact/>
        < Route path='/profile' component={ProfileScreen} exact/>
        < Route path='/' component={HomeScreen} exact/>
        <Route path='/product/:id' component={ProductScreen}></Route>
        <Route path='/cart/:id?' component={CartScreen}></Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
