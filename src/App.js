import React from 'react';
import './App.css';
import logo from './img/logo.svg';
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

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <nav className="navBar">
            <a href="#"><img src={logo} alt="logo"/></a>
            <div className="separator"></div>
            <a href="#">Home</a>
            <a href="#" className="active">Supplier</a>
            <a href="#">About</a>
            <a href="#">Contacts</a>
            <a href="#">Get Started</a>
          </nav>
        </header>
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
            <a href="#">Home</a>
            <a href="#">Supplier</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#">Legal</a>
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
