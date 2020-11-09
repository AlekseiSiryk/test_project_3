import React, { useState } from 'react';
import './section3.css';
import orders from './Orders.jpg';
import operationalCosts from './Operational Costs.png';
import analytics from './Analytics.png';

const Radio = () => {
  return (
      <svg>
        <circle r="3px" cx="50%" cy="50%" fill="#21272e;"></circle>
      </svg>
  );
};
const Section3 = () => {
  let [activePoint, setPoint] = useState(1);
  activePoint = activePoint > 3 ? 3 : activePoint;
  activePoint = activePoint < 1 ? 1 : activePoint;
  return (
      <section className="section3">
        <div className="leftBlock">
          <div className="textBlock">
            <div className={'CarouselTextBlock' +
            (activePoint === 1 ? ' active' : '')}>
              <h2>All your orders in one place</h2>
              <p>
                Say no more to chunky emails and messy WhatsApp messages.
                Receive and manage your orders in one platform
              </p>
            </div>
            <div className={'CarouselTextBlock' +
            (activePoint === 2 ? ' active' : '')}>
              <h2>Some title 2</h2>
              <p>
                Some Text 2
              </p>
            </div>
            <div className={'CarouselTextBlock' +
            (activePoint === 3 ? ' active' : '')}>
              <h2>Some title 3</h2>
              <p>
                Some text 3
              </p>
            </div>
          </div>
          <div className="controls">
            <button disabled={activePoint < 2}
                    onClick={() => setPoint(activePoint - 1)}></button>
            <label name="points" onChange={(e) => setPoint(e.target.value * 1)}>
              <input className="pointRadio" id="point1"
                     checked={activePoint === 1} type="radio" name="points"
                     value="1" onChange={() => true}/>
              <label className="pointRadioLabel"
                     htmlFor="point1"><Radio/></label>
              <input className="pointRadio" id="point2"
                     checked={activePoint === 2} type="radio" name="points"
                     value="2" onChange={() => true}/>
              <label className="pointRadioLabel"
                     htmlFor="point2"><Radio/></label>
              <input className="pointRadio" id="point3"
                     checked={activePoint === 3} type="radio" name="points"
                     value="3" onChange={() => true}/>
              <label className="pointRadioLabel"
                     htmlFor="point3"><Radio/></label>
            </label>
            <button disabled={activePoint > 2}
                    onClick={() => setPoint(activePoint + 1)}></button>
          </div>
        </div>
        <div className="imgBlock">
          <img className={'CarouselImg' + (activePoint === 1 ? ' active' : '')}
               src={orders} alt="analytics"/>
          <img className={'CarouselImg' + (activePoint === 2 ? ' active' : '')}
               src={operationalCosts} alt="operational costs"/>
          <img className={'CarouselImg' + (activePoint === 3 ? ' active' : '')}
               src={analytics} alt="orders"/>
        </div>
      </section>
  );
};
export default Section3;