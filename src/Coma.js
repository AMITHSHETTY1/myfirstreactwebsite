import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Coma = () =>{

    const [data , setData] = useState([]);

    const res = async () => {
          const a = await fetch('https://data.covid19india.org/data.json');
          const actual = await a.json();
          setData(actual.cases_time_series);
    }

    useEffect(() => {

        res()

    },[]);

    return(
        <>
        <h1 className='text-center'>Covid</h1>
        <table className='table table-striped table-bordered'>
        <thead>
        <tr>
        <th>ID</th>
        <th>dailyconfirmed</th>
        <th>dailyconfirmed</th>
        <th>dailyconfirmed</th>
        <th>dailyconfirmed</th>
        <th>dailyconfirmed</th>
        <th>dailyconfirmed</th>
        <th>dailyconfirmed</th>
        </tr>
        </thead>
        <tbody>
         {
        data.map((current,index) => {
            return(
            <tr key={index}>
            <td>{index}</td>
            <td>{current.dailyconfirmed}</td>
            <td>{current.dailydeceased}</td>
            <td>{current.dailyrecovered}</td>
            <td>{current.date}</td>
            <td>{current.dateymd}</td>
            <td>{current.totalconfirmed}</td>
            <td>{current.dailytotaldeceased}</td>
            </tr>
            )
        })
         }
       
        </tbody>

        </table>
        </>
 
    )
}

export default Coma;