import React from 'react';
import './section2.css';
import goCheken from './logo/GoCheken.png';
import jolliebean from './logo/Jolliebean.svg';
import bens from './logo/Bens.svg';
import simplyWrapps from './logo/SimplyWrapps.png';
import italian from './logo/Italian.png';

const Section2 = () => {
  return (
      <section className="section2">
        <h2>Trusted by 1000+ partners across APAC</h2>
        <div className="logoBar">
          <img src={goCheken} className="goCheken" alt="goCheken logo"/>
          <img src={jolliebean} className="jolliebean"
               alt="jolliebean logo"/>
          <img src={bens} className="bens" alt="bens logo"/>
          <img src={simplyWrapps} className="simplyWrapps"
               alt="simplyWrapps logo"/>
          <img src={italian} className="italian" alt="italian logo"/>
        </div>
      </section>
  );
};
export default Section2;