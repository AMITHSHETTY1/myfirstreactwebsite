import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import{NavLink} from 'react-router-dom'

const Carda= (props) =>{
    return(
        <div className="col-md-4">
<div className="card">
  <img src={props.imgsrc} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.ans}</p>
    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
    )
}

export default Carda;