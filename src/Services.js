import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Carda from "./Carda";
import Sservice from './Sservice';

const Services  = () =>{

    return(

    <div className="container">
    <div className="row">
    {Sservice.map((val,ind) =>{
        return(
        <Carda 
 key={ind}
        name={val.name}
        ans={val.ans}
        imgsrc={val.imgsrc}

     />
        )
    
     }
    )
    }

    </div>
    </div>
    )
}

export default Services;