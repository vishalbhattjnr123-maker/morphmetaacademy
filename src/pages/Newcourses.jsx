import React from 'react';
import Hovercourse from '../Components/Hovercourse';



const Newcourses = () => {
  const text = 'Welcome to Morph Meta Academy';
  const text1 = 'Our Courses';

  return (
    <div className="animation-container">
      <h2 className="animated-text">{text}</h2>
      <h1 className="animated-text1 z-0" >{text1}</h1>
      <Hovercourse/>
      
      <div className="lines">
        <div className="line" style={{ left: '10%', animationDelay: '0s' }}></div>
        <div className="line" style={{ left: '30%', animationDelay: '1s' }}></div>
        <div className="line" style={{ left: '50%', animationDelay: '2s' }}></div>
        <div className="line" style={{ left: '70%', animationDelay: '3s' }}></div>
        <div className="line" style={{ left: '90%', animationDelay: '4s' }}></div>
      </div>

  
    </div>
  );
};

export default Newcourses;
