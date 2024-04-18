
import React, { useEffect, useState } from 'react';
import './Home.css';
import Form from './MyForm';

function App() {
  const [band, setBand] = useState([]);

  // Effect for moving the band
  useEffect(() => {
    // Create initial band
    const initialBand = [];
    for (let i = 0; i < Math.floor(window.innerWidth / 20); i++) {
      initialBand.push(createDigit());
    }
    setBand(initialBand);

    // Move band downwards
    const intervalId = setInterval(() => {
      setBand(prevBand => {
        const updatedBand = prevBand.map(digit => ({
          ...digit,
          top: digit.top + 20
        }));

        // Remove digits that move out of the screen
        if (updatedBand[0] && updatedBand[0].top >= window.innerHeight) {
          updatedBand.shift();
          updatedBand.push(createDigit());
        }

        return updatedBand;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  // Effect for creating the falling digits
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBand(prevBand => [...prevBand, createDigit()]);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  function createDigit() {
    return {
      id: Math.random(),
      value: Math.round(Math.random()),
      left: Math.random() * window.innerWidth,
      top: -Math.random() * window.innerHeight,
    };
  }

  return (
    <div className="home">
      {band.map(digit => (
        <span key={digit.id} className="band-digit" style={{ left: digit.left, top: digit.top }}>
          {digit.value}
        </span>
      ))}
      <Form></Form>

    </div>
  );
}

export default App;
