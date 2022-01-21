import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Contact  = () =>{

const [data,setData] = useState({

    fname:"",
    address:""

});

    const InputEvent=(event)=>{
        const{name,value} = event.target;
        setData((preValue)=>{
return{
    ...preValue,
    [name] : value
}

        })
        }
        

const sub=(e)=>{
e.preventDefault();
alert(`${data.fname} ${data.address}`)
}

// useEffect(() =>{
// alert( `my name  is ${name} ${address}`) 

// })




    return(
   <div className="container">
   <div className="row d-flex justify-content-center">
   <div className="col-md-6">
   <form onSubmit={sub}>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    onChange={InputEvent} value={data.fname} name="fname"
    />

  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    onChange={InputEvent} value={data.address} name="address"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
   </div>
   </div>
    )
}

export default Contact;