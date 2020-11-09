import React from 'react';
import './section1.css';
import homepage from './Home page_with shadow.png';

const Section1 = () => {
  return (
      <section className="section1">
        <h4>FOR A SMARTER SUPPLY CHAIN</h4>
        <h2>Take your business to the next level with Tinvio’s Supplier
          Platform</h2>
        <button>Get Started Now</button>
        <p>Yes, it’s free 🎉</p>
        <img className="homepageImg" src={homepage} alt="Home Page"/>
      </section>
  );
};
export default Section1;