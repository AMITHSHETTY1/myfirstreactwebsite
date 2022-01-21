import React, { useState } from "react";
import Sresult from "./Sresult";

const Search  = () =>{
const [img, setImage] = useState("");

const InputEvent = (event) => {
setImage(event.target.value)
}

    return(
    <>

        <input type="text" placeholder="enter the image" onChange={InputEvent} value={img}/><br></br><br></br>
<Sresult name = {img}/>
</>
    )}

export default Search;