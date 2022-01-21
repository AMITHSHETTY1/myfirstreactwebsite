import React from "react";
import Common from './Common.js';
import web from '../src/Images/home_img.jpg';

const About  = () =>{

    return(
        <Common 
    name="About"
    visit="/services"
    imgsrc={web}
    btnname = "Services Now"
    />
    )}

export default About;