import React from 'react'
import { render } from 'react-dom'

function displaySortedStudents (data)
{    
    render(
        <lu>
        {data.map(item => <li>{item.name}</li>)}
        </lu>
        , document.getElementById("sortedStudents")
    
        )
}

const SortStudentsButton=({data}) =>(
    <div>
<button onClick ={() =>displaySortedStudents(data.sort(function(a, b) {
  if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  return 0;
 }))}>Sort students</button>
<div id="sortedStudents">
</div>
</div>
)

export default SortStudentsButton