import React from 'react';
import shirt from './shirt.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mens.css';
import hoodie from './hoodie.png';
import jacket from './jacket.png';
import jeans from './jeans.png';
import pshirt from './printshirt.png';
import kurta from './kurta.png';
import suit from './suit.png';
import sweater from './sweater.png';




export const MensCloth = () => {
  return (
    <div  id="Men">
      <div class="box">
        <h3 class="msntxt">Clothes that make you feel like you can conquer the world</h3>
      </div>

      <div className="row text-center ">
      <div className="col-md-3">
        <div className="card" id='men'>
          <img src={hoodie} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Black & Red Mens hoodie</h5>
            <h5 className="price">PRICE: ₹1999</h5>
            <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
            <a href="#" className="btn btn-primary">ADD TO CART</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" id='men'>
          <img src={shirt} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Formal Shirt</h5>
            <h5 className="price">PRICE: ₹299</h5>
            <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
            <a href="#" className="btn btn-primary">ADD TO CART</a>

          </div>
        </div>
      </div>
      <div className="col-md-3" >
        <div className="card" id='men'>
          <img src={jeans} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Blue Jeans</h5>
            <h5 className="price">PRICE: ₹2000</h5>
            <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
            <a href="#" className="btn btn-primary">ADD TO CART</a>

          </div>
        </div>
      </div>
      <div className="col-md-3" >
        <div className="card" id='men'>
          <img src={jacket} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Winter Jacket</h5>
            <h5 className="price">PRICE: ₹500</h5>
            <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
            <a href="#" className="btn btn-primary">ADD TO CART</a>
          </div>
        </div>
      </div>

      

</div><br/>


<div className="row text-center ">
      <div className="col-md-3">
        <div className="card" id='men'>
          <img src={kurta} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">MENS - GOLDEN KURTA</h5>
            <h5 className="price">PRICE: ₹3000</h5>
            <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
            <a href="#" className="btn btn-primary">ADD TO CART</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card" id='men'>
          <img src={sweater} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Sweater</h5>
            <h5 className="price">PRICE: ₹699</h5>
            <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
            <a href="#" className="btn btn-primary">ADD TO CART</a>

          </div>
        </div>
      </div>
      <div className="col-md-3" >
        <div className="card" id='men'>
          <img src={pshirt} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">PRINTED SHIRTS FORMAL</h5>
            <h5 className="price">PRICE: ₹799</h5>
            <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
            <a href="#" className="btn btn-primary">ADD TO CART</a>

          </div>
        </div>
      </div>
      <div className="col-md-3" >
        <div className="card" id='men'>
          <img src={suit} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">DESIGNER SUITS COMBO</h5>
            <h5 className="price">PRICE: ₹15000</h5>
            <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
            <a href="#" className="btn btn-primary">ADD TO CART</a>
          </div>
        </div>
      </div>

      

</div><br/>
    </div>
  );
};
