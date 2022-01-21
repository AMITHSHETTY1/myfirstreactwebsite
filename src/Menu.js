import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

const Menu = () =>{
return(
    <>
<NavLink exact="true" to="/" activeclassname="active">About</NavLink>
<NavLink to="/contact" activeclassname="active">Contact</NavLink>
<NavLink to="/user/" activeclassname="active">User</NavLink>
<NavLink to="/search/" activeclassname="active">Search</NavLink>
</>
)

}

export default Menu;