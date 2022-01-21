import React from "react";
import web from '../src/Images/home_img.jpg';
import Common from './Common.js'

const Home  = () =>{

    return(

    <Common 
    name="home"
    visit="/contact"
    imgsrc={web}
    btnname = "Contact Now"
    />
    )
}

export default Home;