import React from "react";

import {NavLink} from 'react-router-dom'

const Common  = (props) =>{

    return(

    <div className="container">
    <div className="row d-flex align-items-center">
    <div className="col-md-6">
    <h1>{props.name}</h1>
    <NavLink to={props.visit} className="btn btn-primary">{props.btnname}</NavLink>
    </div>
    <div className="col-md-6">
    <img src={props.imgsrc} alt="homeimage" className="img-fluid object"/>
    </div>
    </div>
    </div>
    )
}

export default Common;