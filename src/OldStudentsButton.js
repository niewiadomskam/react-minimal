import React from 'react'
import { render } from 'react-dom'


function displayOldStudents (data)
{    
    render(
        <lu>
        {data.map(item => <li>{item.name}</li>)}
        </lu>
        , document.getElementById("oldStudents")
    
        )
}

const OldStudentsButton=({data}) =>(
    <div>
<button onClick ={() =>displayOldStudents(data.filter(x=>x.age>20))}>Old students</button>
<div id ="oldStudents">

</div>
</div>
)

export default OldStudentsButton