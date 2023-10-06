import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import material from './material.png';
import saree from './saree.png';
import gown from './gown.png';
import track from './tracksuit.png';
import lehenga from './lehenga.png';
import top from './top.png';
import leggins from './leggins.png';
import floral from './floral.png';


export const Womens = () => 
{
    return (
      <div>
        <div className="row text-center ">
        <div className="col-md-3">
          <div className="card" id='men'>
            <img src={material} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Silk Dress Material</h5>
              <h5 className="price">PRICE: ₹1000</h5>
              <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
              <a href="#" className="btn btn-primary">ADD TO CART</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" id='men'>
            <img src={saree} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">SILK SAREE</h5>
              <h5 className="price">PRICE: ₹399</h5>
              <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
              <a href="#" className="btn btn-primary">ADD TO CART</a>
  
            </div>
          </div>
        </div>
        <div className="col-md-3" >
          <div className="card" id='men'>
            <img src={gown} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">WEDDING GOWN</h5>
              <h5 className="price">PRICE: ₹20000</h5>
              <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
              <a href="#" className="btn btn-primary">ADD TO CART</a>
  
            </div>
          </div>
        </div>
        <div className="col-md-3" >
          <div className="card" id='men'>
            <img src={track} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">LADIES TRACK SUIT</h5>
              <h5 className="price">PRICE: ₹450</h5>
              <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
              <a href="#" className="btn btn-primary">ADD TO CART</a>
            </div>
          </div>
        </div>
        </div><br/>

        <div className="row text-center ">
        <div className="col-md-3">
          <div className="card" id='men'>
            <img src={lehenga} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">LEHENGA</h5>
              <h5 className="price">PRICE: ₹2000</h5>
              <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
              <a href="#" className="btn btn-primary">ADD TO CART</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" id='men'>
            <img src={floral} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">FLORAL PRINT DRESS</h5>
              <h5 className="price">PRICE: ₹299</h5>
              <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
              <a href="#" className="btn btn-primary">ADD TO CART</a>
  
            </div>
          </div>
        </div>
        <div className="col-md-3" >
          <div className="card" id='men'>
            <img src={top} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">CASUAL TOP</h5>
              <h5 className="price">PRICE: ₹199</h5>
              <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
              <a href="#" className="btn btn-primary">ADD TO CART</a>
  
            </div>
          </div>
        </div>
        <div className="col-md-3" >
          <div className="card" id='men'>
            <img src={leggins} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">PRINTED LEGGINS - SET OF 3</h5>
              <h5 className="price">PRICE: ₹999</h5>
              <a href="#" className="btn btn-primary">BUY NOW</a>&nbsp; &nbsp;
              <a href="#" className="btn btn-primary">ADD TO CART</a>
            </div>
          </div>
        </div>
  </div>
  </div>

  
  
  
        

    );
  };