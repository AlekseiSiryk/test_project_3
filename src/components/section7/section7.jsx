import React from 'react';
import './section7.css';
import './flags.css';

const Country = ({ct, country}) => {
  return (
      <div className="country">
        <div className={'flag flag-' + ct}></div>
        {country}
      </div>
  );
};
const Section7 = () => {
  return (
      <section className="section7">
        <div className="leftBlock">
          <h3>let’s do this</h3>
          <h1>
            Fill up the form and we’ll get in touch within<br/>
            a few hours
          </h1>
          <div className="arrow2">
            <span>Or meet us in</span>
          </div>
          <div className="countries">
            <Country ct="sg" country="Singapore"/>
            <Country ct="id" country="Indonesia"/>
            <Country ct="au" country="Australia"/>
            <Country ct="tw" country="Taiwan"/>
            <Country ct="hk" country="Hong Kong"/>
            <Country ct="th" country="Thailand"/>
            <Country ct="in" country="India"/>
            <Country ct="vn" country="Vietnam"/>
          </div>
        </div>
        <div className="rightBlock">
          <div className="arrow1">
            <span>Let’s get to know each other</span>
          </div>
          <form action="#">
            <h3>Hi, we are Tinvio! And you?</h3>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Business Name"/>
            <input type="number" placeholder="+65"/>
            <input type="number"/>
            <input type="submit" value="Get Started"/>
            <span>No spam, promise 🙌</span>
          </form>
        </div>
      </section>
  );
};
export default Section7;