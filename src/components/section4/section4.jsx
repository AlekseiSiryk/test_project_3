import React, {useState} from 'react';
import Lottie from 'react-lottie';
import './section4.css';
import before from './Before.png';
import animation from './animation.json';

const options = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Section4 = () => {
  const [activeCommunication, setActiveCommunication] = useState('before');
  const Img = activeCommunication === 'before' ?
      () => (<img src={before} alt="Before"/>) :
      () => (
          <Lottie className="img" options={options}/>);
  return (
      <section className="section4">
        <div className="iceBlueTwo"></div>
        <div className="imgBlock">
          <Img/>
        </div>
        <div className="communication">
          <h2>Communication</h2>
          <div className="controls">
            <input id="before"
                   checked={activeCommunication === 'before'} type="radio"
                   name="Communication"
                   value="before"
                   onChange={() => setActiveCommunication('before')}/>
            <label htmlFor="before">
              <div>BEFORE</div>
            </label>
            <input id="after"
                   checked={activeCommunication === 'after'} type="radio"
                   name="Communication"
                   value="after"
                   onChange={() => setActiveCommunication('after')}/>
            <label htmlFor="after">
              <div>AFTER</div>
            </label>
          </div>
          <div className="line"></div>
        </div>
        <div className="textBlock">
          <h4 className={activeCommunication === 'before' ?
              'active' :
              'disabled'}>Old-School Chaos</h4>
          <p className={activeCommunication === 'before' ?
              'active' :
              'disabled'}>
            Unstructured orders across multiple apps and inboxes.
            New message notifications and alerts every few minutes
          </p>
          <h4 className={activeCommunication === 'after' ?
              'active' :
              'disabled'}>New-School Chaos</h4>
          <p className={activeCommunication === 'after' ?
              'active' :
              'disabled'}>
            Lorem ipsum dolor sit ammet, Lorem ipsum dolor sit ammet,
            Lorem ipsum dolor sit ammet
          </p>
        </div>
      </section>
  );
};
export default Section4;