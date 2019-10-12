import React from 'react'
import { render } from 'react-dom'

function displayALLStudents(data)
{
    render(
    <lu>
    {data.map(item => item.map(student=> <li>{student.name}</li>))}
    </lu>
    , document.getElementById("allStudents")

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
