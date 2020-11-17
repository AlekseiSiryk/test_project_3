import React from 'react';
import './section6.css';
import icon1 from './icon1.jpg';
import icon2 from './icon2.jpg';
import icon3 from './icon3.jpg';

const Section6 = () => {
  return (
      <section className="section6">
        <div className="iceBlueTwo"></div>
        <h4>ARE YOU READY?</h4>
        <h2>3 Simple Steps to Get Started</h2>
        <div className="row">
          <div>
            <img src={icon1} alt="icon 1"/>
            <h3>Get in Touch With Us</h3>
            <p>Fill up the form and we’ll reach out to you</p>
          </div>
          <div>
            <img src={icon2} alt="icon 2"/>
            <h3>Connect to Your Clients</h3>
            <p>They’ll receive a fully guided tutorial on how to order</p>
          </div>
          <div>
            <img src={icon3} alt="icon 3"/>
            <h3>Onboarded In a Heartbeat</h3>
            <p>Activated and live within a day</p>
          </div>
        </div>
      </section>
  );
};
export default Section6;