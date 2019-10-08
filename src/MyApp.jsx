import React from 'react'
import AppTitle from './AppTitle'

const generateArray = (n) => [...Array(n+1).keys()].filter(x=>x>0);



const App = () => (
  <div>
    <AppTitle name="Marta" />
  <h1>Minimal React - niewiadomskam 8b62f7d263cbf41d63725f2dfe718be119fe2917</h1>  
  <p>Bundle size: 57 bytes, Load time of the bundle: 35 ms, Last commit SHA1: f6a9f42152fefba5a78e9929632b278758dcdb70</p>
  <lu>
    {generateArray(5).map(item=><li>{item}</li>)}
  </lu>
  </div>
)

export default App