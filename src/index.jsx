import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Hi(){

  const[isActive, setIsActive] = useState(true);
  
const handleClick = () =>{

  setIsActive(current=>!current);
};

  
  return <div


style={{
  backgroundColor:isActive?'greenyellow':'pink'
}} id = "color">

  <button onClick={handleClick} id="b">Click Me</button>

  </div>
}

ReactDOM.render(<Hi/>,document.querySelector('#root'));
