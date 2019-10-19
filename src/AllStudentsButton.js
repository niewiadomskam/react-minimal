import React from 'react'
import { render } from 'react-dom'

function displayALLStudents(data)
{
    return(
    <lu>
    {data.map(item => item.map(student=> <li>{student.name}</li>))}
    </lu>

    )
}

const AllStudentsButton=({data}) =>(
    <div >
<button onClick ={() =>displayALLStudents(data)}>All students</button>
<div id = "allStudents">
</div>
</div>
)

export default AllStudentsButton
