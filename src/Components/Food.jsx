import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Food = (props) => 
{
  return (
    <div>
        <div className="card mb-3" style={{ maxWidth:300}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.imgsrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.sname}</h5>
        <p className="card-text"><big className="text-body-secondary">{props.price}</big></p>
        <button type="button" class="btn btn-warning" style={{fontWeight:'bold'}}>PLACE ORDER</button>
        
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Food
