import React from "react";
import AOS from 'aos';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import SigninScreen from './screen/SigninScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
import NavBar from "./NavBar";
import Footer from "./Footer";
// import js from 'main.js';
import '../node_modules/aos/dist/aos.css';
import RegisterScreen from "./screen/RegisterScreen";
import ProductsScreen from "./screen/ProductsScreen";
import ShippingScreen from "./screen/ShippingScreen";




const Home = () => {
  AOS.init();
  return (
    <>
  <NavBar />
    <section className="main_section">
      <div className="container">

<Route path="/product/:id" component={ProductScreen} />
<Route path="/products" component={ProductsScreen} />
<Route path="/shipping" component={ShippingScreen} />
<Route path="/signin" component={SigninScreen} />
<Route path="/register" component={RegisterScreen} />
<Route path="/cart/:id?" component={CartScreen} />
<Route path="/" exact={true} component={HomeScreen} />


        
      </div>
    </section>

   <Footer />
    </>
  

  );
};

export default Home;
