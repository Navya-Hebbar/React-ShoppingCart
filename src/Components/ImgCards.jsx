import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import trolly from './trolly.png';
import giphone from './goldiphone.png';
import snacks from './snacks.png';
import kids from './kids.png';
import table from './table.png';
import powerbank from './powerbank.png';
import shoes from './shoes.png';
import headphone from './headphone.png';
import './imgcards.css';


export const ImgCards = () => {
  return (
    <div className="row text-center " id='navy'>
      <div className="col-md-3">
        <div className="card">
          <img src={headphone} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">HEADPHONES</h5>
            <h5 className="price">Starting from ₹200</h5>
            <a href="#" className="btn btn-success">EXPLORE</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src={giphone} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">IPHONES</h5>
            <h5 className="price">Starting from ₹29000</h5>

            <a href="#" className="btn btn-success">EXPLORE</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src={powerbank} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">POWERBANK</h5>
            <h5 className="price">Starting from ₹1000</h5>

            <a href="#" className="btn btn-success">EXPLORE</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src={shoes} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">SPORTS SHOES</h5>
            <h5 className="price">Starting from ₹700</h5>
            <a href="#" className="btn btn-success">EXPLORE</a>
          </div>
        </div>
      </div><bt/><br/>


      <div className="col-md-3">
        <div className="card">
          <img src={trolly} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">TROLLY BAGS</h5>
            <h5 className="price">Starting from ₹4999</h5>
            <a href="#" className="btn btn-success">EXPLORE</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src={snacks} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">SNACKS</h5>
            <h5 className="price">Starting from ₹10</h5>

            <a href="#" className="btn btn-success">EXPLORE</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src={table} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">STUDY TABLES</h5>
            <h5 className="price">Starting from ₹2000</h5>

            <a href="#" className="btn btn-success">EXPLORE</a>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <img src={kids} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">KIDS CLOTHS</h5>
            <h5 className="price">Starting from ₹399</h5>
            <a href="#" className="btn btn-success">EXPLORE</a>
          </div>
        </div>
      </div>
    </div>
  );
};
