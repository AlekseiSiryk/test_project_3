import React from 'react';
import './App.css';
import './App_low.css';
import './lines.css';
import logoWhite from './img/logo-white.svg';
import inst from './img/icon-24-social-inst.svg';
import link from './img/icon-24-social-linkedin.svg';
import appStore from './img/app-store-badge.svg';
import googlePlay from './img/google-play-badge.svg';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Section5 from './components/section5/section5';
import Section6 from './components/section6/section6';
import Section7 from './components/section7/section7';
import Header from './components/header/header';

setTimeout(()=>{
  document.getElementsByClassName('App-header')[0].addEventListener('click', (e) => {
    if (e.target.tagName === "A") document.getElementById("menuBtn").checked = false;
  });
},0);

function App() {
  return (
      <div className="App">
          <div className="iceBlueTwo"></div>
          <div className="lines lines1"></div>
          <div className="lines lines2"></div>
          <div className="lines lines3"></div>
          <div className="lines lines3 lines3-1"></div>
          <div className="lines lines3 lines3-2"></div>
          <div className="lines lines3 lines3-3"></div>
          <div className="lines lines3 lines3-4"></div>
          <div className="lines lines3 lines3-5"></div>
          <div className="lines lines3 lines3-6"></div>
          <div className="lines lines3 lines3-7"></div>
          <div className="lines lines4"></div>
        <Header/>
        <main className="App-main">
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
          <Section7/>
        </main>
        <footer className="App-footer">
          <nav className="navBar">
            <a href="#"><img src={logoWhite} alt="logo"/></a>
            <div className="separator"></div>
            <a href="#" className="footer-home string">Home</a>
            <a href="#" className="footer-supplier string">Supplier</a>
            <a href="#" className="footer-about string">About</a>
            <a href="#" className="footer-contact string">Contact</a>
            <a href="#" className="footer-faq string">FAQ</a>
            <a href="#" className="footer-blog string">Blog</a>
            <a href="#" className="footer-legal string">Legal</a><div className="breaker" />
            <div className="separator"></div>
            <a href="#" className="inst"><img src={inst} alt="Instagram"/></a>
            <a href="#" className="link"><img src={link} alt="Linkedin"/></a>
            <a href="#" className="aStore"><img src={appStore} alt="App Store"/></a>
            <a href="#" className="gPlay"><img src={googlePlay} alt="Google Play"/></a>
          </nav>
          <div>
            © Tinvio™ 2019. All Rights Reserved
          </div>
        </footer>
      </div>
  );
};
export default App;
