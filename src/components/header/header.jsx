import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './header.css';

const Header = () => {
  const [menuOpened, menuOpenedUpdate] = useState(false);
  document.body.style.overflow = menuOpened ? "hidden" : "initial";
  return (
      <header className="App-header">
        <input type="checkbox" checked={menuOpened} onChange={()=>menuOpenedUpdate(!menuOpened)} id="menuBtn"/>
        <nav className="navBar">
          <a href="#"><img src={logo} alt="logo"/></a>
          <div className="separator"></div>
          <label htmlFor="menuBtn" className="menuBtnLabel"></label>
          <a href="#" className="header-home">Home</a>
          <a href="#" className="active header-supplier">Supplier</a>
          <a href="#" className="header-about">About</a>
          <a href="#" className="header-contacts">Contact</a>
          <a href="#">Get Started</a>
        </nav>
      </header>
  );
};
export default Header;