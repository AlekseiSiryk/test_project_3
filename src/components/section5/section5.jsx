import React from 'react';
import './section5.css';
import screen1 from './Screen 1.png';
import screen2 from './Screen 2.png';
import screen3 from './Screen 3.png';

const Section5 = () => {
  return (
      <section className="section5">
        <div className="textBlock">
          <h2>Seamless Ordering Experience</h2>
          <span>
                Increase your sales by 30% with a better checkout <br/>
                experience. Your customers can place orders <br/>
                easily with a few taps on the item list
          </span>
        </div>
        <div className="imgBlock">
          <div>
            <img src={screen1} alt="screen 1"/>
            <span>Select Items</span>
          </div>
          <div>
            <img src={screen2} alt="screen 2"/>
            <span>Review Order</span></div>
          <div>
            <img src={screen3} alt="screen 3"/>
            <span>Send Order</span></div>
        </div>
      </section>
  );
};
export default Section5;