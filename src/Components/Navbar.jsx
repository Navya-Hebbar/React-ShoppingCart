import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import './navbar.css';
import cart from './logocart.png';
import profile from './profile.png'

const Navbar = () => 
{
  return (
    <div>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <div class="d-flex align-items-center justify-content-end">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="40" height="40" class="d-inline-block align-text-top"/>
          SHOPPING CART
        </a>
        <div class="search-bar">
          <input type="search" placeholder="Search Your Item"/>
        </div>&nbsp; &nbsp;

        <div class="profile-logo ">
          <img src={profile} alt="Profile Logo" width="45" height="45"/>
        </div>&nbsp; &nbsp;

        <div class="cart-logo">
        <a href="#Cart"><img src={cart} alt="Cart Logo" width="30" height="30"/></a>
        <span style={{fontWeight:'bold'}}>10</span>
          
        </div>&nbsp; &nbsp;&nbsp; &nbsp;

        <p class="text-center">"An exciting place for the whole family to shop"</p>
      </div>
    </div>


    
  </nav>
</div>


  )
}

export default Navbar
