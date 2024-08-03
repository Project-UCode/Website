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
        <Link to="/" ><div className="logo">Project UCode</div></Link>
          <ul>
            <li className="navLet">
                <Link to="/">Home</Link>
            </li>
            <li className="navLet">
              <Link to="/about">About <i class="fa-solid fa-chevron-down"></i></Link>
              <ul className='navDrop navLet twoEl'>
                  <li><Link to="/events">Events</Link></li>
                  <li><a href="https://www.instagram.com/projectucode/" target="_blank">Media</a></li>
              </ul>
            </li>
            <li className="navLet">
              <Link to="/courses">Learn <i class="fa-solid fa-chevron-down"></i></Link>
              <ul className='navDrop navLet twoEl'>
                  <li><Link to="/courses">Courses</Link></li>
                  <li><Link to="/live">UCode Live</Link></li>
              </ul>
            </li>
            <li className="navLet">
              <a href="#">Donate</a>
            </li>
            <li className="navLet">
              <Link to="/contact">Contact Us <i class="fa-solid fa-chevron-down"></i></Link>
              <ul className='navDrop navLet contNav'>
                  <li><Link to="/volunteer">Volunteer</Link></li>
                  <li><Link to="/partner">Partner</Link></li>
                  <li><Link to="/chapters">Chapters</Link></li>
                  <li><a href="https://discord.gg/SE8m5xsuay" target="_blank">Discord</a></li>
              </ul>
            </li>
            <li>
              <a href="volunteer" className="btn dark">Join</a>
            </li>
          </ul>
        </nav>

        <nav className={`mobile-nav ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo">Project UCode</div>
          <div className="menu-icon" onClick={toggleMenu}>
            <img src="../Images/menu-icon.svg" alt="Menu Icon" />
          </div>
        </nav>

        <div className={`mobile-menu-container ${active ? 'active' : ''}`} id="mobileMenu">
          <div className="close-icon" onClick={toggleMenu}>
            <img src="../Images/close-icon.svg" alt="Close Icon" />
          </div>
          <ul>
          <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/live">UCode Live</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/chapters">Chapters</Link></li>
            <li><a href="#">Donate</a></li>
            <li><Link to="/partner">Partner</Link></li>
            <li><Link to="/contact" target="_blank">Contact Us</Link></li>
            <li><Link to="/volunteer" className="btn dark">Join</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
