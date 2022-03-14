import React, {useState} from 'react';
import {HiOutlineMenu} from "react-icons/hi";
import {RiParkingBoxLine} from "react-icons/ri";
import {Link} from 'react-router-dom';
import {data} from '../../constants';
import images from "../../constants/images";
import './Navbar.scss';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return(

  <nav className={"app__navbar"}>
      <div className={"app__navbar-logo"}>
          <img src={images.sign24h} alt ="app logo" />
      </div>

      <ul className="app__navbar-links">
          {data.navList.map(navList => (<li className={navList.className}> <Link to={navList.to}> {navList.name} </Link></li>))}
      </ul>
      <div className="app__navbar-button">
          <a target="_blank"  rel="noreferrer" href="https://goo.gl/maps/6eJri8Ff7SYJHtAS8" className="p__opensans"> Znajdź nas na mapie</a>

      </div>
      <div className="app__navbar-smallscreen">
          <HiOutlineMenu fontSize={27} onClick ={() => setToggleMenu(true)} />

          {toggleMenu && (
              <div className ="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <RiParkingBoxLine color ="fff" fontSize={27} className="overlay__close" onClick ={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen-links">
              {data.navList.map(navList => (<li className={navList.className} onClick ={() => setToggleMenu(false)}> <Link to={navList.to}> {navList.name} </Link></li>))}
          </ul>
      </div>
              )}
      </div>
  </nav>

);
}
export default Navbar;
