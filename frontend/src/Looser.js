import React, { useState, useEffect } from 'react';
import './Looser.css'; // Import the CSS file

const Looser = () => {
  const [text, setText] = useState('');
  const [randomIndex, setRandomIndex] = useState(0); // State for random index
  const originalText = [
    "Congratulations! Your HardWork Almost Paid Out!! Try Again🤣",
    "Bhai Kuch Vi Type Karney Se Hojayega Kyaa??🤣"
  ];
  const speed = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (text.length < originalText[randomIndex].length) {
        setText(prevText => prevText + originalText[randomIndex].charAt(text.length));
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [randomIndex, text]); // Add randomIndex and text to the dependency array

  useEffect(() => {
    // Set random index once when component mounts
    setRandomIndex(Math.round(Math.random()));
  }, []); // Empty dependency array to run only once on mount
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
    </div>
  );
}

export default Looser;
