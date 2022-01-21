import React from "react";
import { useParams,useLocation } from "react-router-dom";

const User = () =>{

const {fname,lname} = useParams();
const location = useLocation();
return(
    <><h1>user {fname}{lname} is</h1>
    <h1>current location is {location.pathname}</h1>
    {location.pathname === "/user/amith/shetty" ? <button onClick={() => 
    alert("you r awesome")}>click me</button> : null}
    </>

)



}

export default User