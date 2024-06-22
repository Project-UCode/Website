import React, { useState, useEffect } from 'react';

import { Link,NavLink } from "react-router-dom";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState('none');

  const toggleMenu = () => {
    setMenuDisplay(menuDisplay === 'flex' ? 'none' : 'flex');
    setActive(!active);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <nav className={scrolled ? 'scrolled' : ''}>
        <a href="home" ><div className="logo">Project UCode</div></a>
          <ul>
            <li className="navLet">
                <a href="home">Home</a>
            </li>
            <li className="navLet">
              <a href="about">About <i class="fa-solid fa-chevron-down"></i></a>
              <ul className='navDrop navLet twoEl'>
                  <li><a href="#">Events</a></li>
                  <li><a href="https://www.instagram.com/projectucode/">Media</a></li>
              </ul>
            </li>
            <li className="navLet">
              <a href="https://www.youtube.com/channel/UCIKvJ8iM6Q7Py8JSqOwAMUQ">Learn <i class="fa-solid fa-chevron-down"></i></a>
              <ul className='navDrop navLet twoEl'>
                  <li><a href="#">Courses</a></li>
                  <li><a href="#">Workshops</a></li>
              </ul>
            </li>
            <li className="navLet">
              <a href="#">Donate</a>
            </li>
            <li className="navLet">
              <a href="mailto:support@projectucode.org">Contact Us <i class="fa-solid fa-chevron-down"></i></a>
              <ul className='navDrop navLet contNav'>
                  <li><a href="volunteer">Volunteer</a></li>
                  <li><a href="chapters">Chapters</a></li>
                  <li><a href="https://discord.gg/SE8m5xsuay">Discord</a></li>
              </ul>
            </li>
            <li>
              <a href="#" className="btn dark">Join</a>
            </li>
          </ul>
        </nav>

        <nav className={`mobile-nav ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo">Project UCode</div>
          <div className="menu-icon" onClick={toggleMenu}>
            <img src="Images/menu-icon.svg" alt="Menu Icon" />
          </div>
        </nav>

        <div className={`mobile-menu-container ${active ? 'active' : ''}`} id="mobileMenu">
          <div className="close-icon" onClick={toggleMenu}>
            <img src="Images/close-icon.svg" alt="Close Icon" />
          </div>
          <ul>
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="https://www.youtube.com/channel/UCIKvJ8iM6Q7Py8JSqOwAMUQ">Learn</a></li>
            <li><a href="volunteer">Volunteer</a></li>
            <li><a href="chapters">Chapters</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="mailto:support@projectucode.org">Contact Us</a></li>
            <li><a href="#" className="btn dark">Join</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
