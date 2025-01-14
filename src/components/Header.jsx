import React, { useState } from "react";
import { useEffect } from 'react';
import Splitting from 'splitting';
import "../asset/css/Header.css";


const Header = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  useEffect(() => {
    Splitting();
    
    let prevScrollTop =window.scrollY;

    const handleScroll = () => {
      const nowScrollTop = window.scrollY;
      if(nowScrollTop > prevScrollTop) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
      prevScrollTop = nowScrollTop;
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrollDown ? "active" : ""}>
      <a href="index.html" className="logo en">
        <span className="en2">DS.Shin</span>Portfolio
      </a>
      <nav className="gnb en">
        <ul>
          <li>
            <a href="#" data-splitting>
              About
            </a>
          </li>
          <li>
            <a href="#" data-splitting>
              Work
            </a>
          </li>
          <li>
            <a href="#" data-splitting>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <a href="#" className="menuOpen">
        <span className="a"></span>
        <span className="b"></span>
      </a>
    </header>
  );
};

export default Header;
