import React, { useState, useEffect } from 'react';
import './Form.css'
import Health from './Health'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [keyVal, setKeyVal] = useState({
    key: ''
  })
  const [keytoss, settoss] = useState()
  const navigate = useNavigate();
  function handleChange(e) {
    e.preventDefault();
    setKeyVal({ [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(keyVal);
    const formdata = { keyVal, keytoss };
    const { data } = await axios.post(
      "http://localhost:8000/product/secret",
      {
        ...formdata,
      }
    );
    const { success, message, goals } = data;
    // console.log(data)
    if (success) {
      navigate("/winner");
      
      
    } else {
      // alert("Room id incorrect or Closed")
    }
    setKeyVal({ key: '' })
    settoss(goals)
    if(goals == 0){
      navigate("/looser");
    }

  }

  // FOr ANimation
  const [animationInterval, setAnimationInterval] = useState(null);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  useEffect(() => {
    const checkMI = async () => {
      const response = await axios.get("http://localhost:8000/product/keytoss");
      console.log(response);
      // const { data } = response;
      const { success, message, goals } = response.data;
      // const statements = "❤️";
      // const statements = Array(goals).fill(statement).map((item, index) => (
      //   {item}
      // ));
      if (success) {
        console.log(goals)
        settoss(goals)
      } else {
        alert("Error: " + message);
      }

      return goals
    }
    checkMI();


  }, []);
  const handleMouseOver = (event) => {
    let iteration = 0;

    clearInterval(animationInterval);

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 20);

    setAnimationInterval(interval);
  };

  return (
    <div className="form-div">
      <h1 data-value="ENTER KEY" style={{ color: '#11BF16', marginTop: '30px' }} onMouseOver={handleMouseOver}>Input the KEY</h1>
      <form action="" className="form-d" >

        <input type="text" autoComplete='off' onChange={handleChange} spellCheck="false" name="key" placeholder='Enter Key' value={keyVal.key} />
        <button type="submit" onClick={handleSubmit} >Submit</button>
      </form>
      <div className="live-div">
        <div style={{ display: 'flex', fontSize: '25px' }}>
          <b>Hearts: {keytoss}</b>
        </div>
      </div>
    </div>
  )
}