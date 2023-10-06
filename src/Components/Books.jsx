import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from 'react-use-cart';

export const Books = (props) => {
  const {addItem}=useCart();
  return (
    <div>
        <div className="card mb-3" style={{width:'300px'}}>
  <div className="col">
    <div className="card">
      <img src={props.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h3 className="card-title">{props.price}</h3>
        <p className="card-text">{props.description}</p>
        <button type="button" class="btn btn-primary bg-gradient" 
        onClick={()=>addItem(props.item)}>ADD TO CART</button>

      </div>
    </div>
  </div>
  </div>

    </div>
  )
}
