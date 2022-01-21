import React, { useContext } from 'react';
import Card from './Comc.js'
import Comd from './Comd.js'

const Comb = () => {
    return(
Comd.map((val) => {

return(
    <Card 
    key = {val.id}
    fname = {val.fname}
    lname = {val.lname}
    />
)
}
)
    )
}
export default Comb;