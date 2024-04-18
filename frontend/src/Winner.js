import React, { useState, useEffect } from 'react';
import './Looser.css';

const Looser = () => {
  const [text, setText] = useState('');
  const originalText = "Haecker ! !Hecker !!  You found the Key !! Congrats";
  const speed = 100; // Speed of animation in milliseconds
  // const [btn,setBtn] = useState(false);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < originalText.length) {
        setText(prevText => prevText + originalText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once
  // setTimeout(()=>{
  //   setBtn(true)
  // },7000)
  return (
    <div className='main-div'>
        <div class="confetti">
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
</div>
        <div className="text-container">
      {text}
    </div>
   {/* {
    btn ?
    <Link to="/">
    <button className='btn'>
   Go Back
   </button>
    </Link>
: null
   } */}
    </div>
  );
}

export default Looser;
