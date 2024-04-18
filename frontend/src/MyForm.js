import React, { useState } from 'react';
import './Form.css'
import Health from './Health'

 export default function Form(){
  const [keyVal , setKeyVal] = useState({
    key: ''
  })
  function handleChange(e){
    e.preventDefault();
    setKeyVal({[e.target.name] : e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(keyVal);
    setKeyVal({key: ''})
  }

  // FOr ANimation
  const [animationInterval, setAnimationInterval] = useState(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseOver = (event) => {
    let iteration = 0;

    clearInterval(animationInterval);

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

      if(iteration >= event.target.dataset.value.length){
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 20);

    setAnimationInterval(interval);
  };

   return(
    <div className="form-div">
      <h1 data-value="ENTER KEY" style={{color: '#11BF16'}} onMouseOver={handleMouseOver}>XKKFVCKALDD</h1>
      <form action="" className="form-d" >

    <input type="text" autoComplete='off' onChange={handleChange} spellCheck="false" name="key" placeholder='Enter Key' value={keyVal.key}   />
    <button type="submit" onClick={handleSubmit} >Submit</button>
    </form>
    <div className="live-div">
    <Health></Health>
    </div>
    </div>
   )
}