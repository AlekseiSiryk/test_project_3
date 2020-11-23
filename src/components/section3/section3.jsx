import React, {useState} from 'react';
import './section3.css';
import orders from './Orders.png';
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
  window.lastActivePoint = window.lastActivePoint === 'undefined' ? 1 : window.lastActivePoint;
  activePoint = activePoint > 3 ? 3 : activePoint;
  activePoint = activePoint < 1 ? 1 : activePoint;
  const reverseAnimation = activePoint >= window.lastActivePoint ? "Forward" : "Reverse";
  window.lastActivePoint = activePoint;
  return (
      <section className="section3">
        <div className="leftBlock">
          <div className="textBlock">
            <div className={'CarouselTextBlock' +
            (activePoint === 1 ? ' active' : ' back') + reverseAnimation}>
              <h2>All your orders in one place</h2>
              <p>
                Say no more to chunky emails and messy WhatsApp messages.
                Receive and <span> manage your orders </span> in one platform
              </p>
            </div>
            <div className={'CarouselTextBlock' +
            (activePoint === 2 ? ' active' : ' back') + reverseAnimation}>
              <h2>Some title 2</h2>
              <p>
                Some Text 2
              </p>
            </div>
            <div className={'CarouselTextBlock' +
            (activePoint === 3 ? ' active' : ' back') + reverseAnimation}>
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
        <div className={'imgBlock'}>
          <div className={'imgWrapper' + (activePoint === 1 ? ' active' : ' back') + reverseAnimation}>
               <img src={orders} alt="analytics"/></div>
          <div className={'imgWrapper' + (activePoint === 2 ? ' active' : ' back') + reverseAnimation}>
          <img src={operationalCosts} alt="operational costs"/></div>
          <div className={'imgWrapper' + (activePoint === 3 ? ' active' : ' back') + reverseAnimation}>
            <img src={analytics} alt="orders"/></div>
        </div>
      </section>
  );
};
export default Section3;