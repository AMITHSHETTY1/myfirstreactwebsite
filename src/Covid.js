import React, { useEffect, useState } from "react";

const Covid = () =>{

const[data,setDate] = useState([]);

const res = async() =>{
    const a = await fetch("https://data.covid19india.org/data.json");
    const actual = await a.json();
    setDate(actual.cases_time_series)
}

useEffect(() =>{
    return(
        res()
    )
})


return(
<table>
<thead>
<tr>
<th>dailyconfirmed</th>
<th>dailydeceased</th>
<th>dailyrecovered</th>
</tr></thead>
<tbody>

{data.map((val,ind)=>{
return(
<tr key={ind}> 
<td>{val.dailyconfirmed}</td>
<td>{val.dailydeceased}</td>
<td>{val.dailyrecovered}</td>
</tr>

)

})}

</tbody>
</table>
)


}

export default Covid