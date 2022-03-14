import React from 'react';
import images from "../../constants/images";
import './Footer.scss';
import {Link} from "react-router-dom";
import {data} from '../../constants';

const Footer = () => (
  <div className="app__footer">
     <div className="app__footer-contact">
         <h1 className="app__footer-headtext">Skontaktuj się z nami</h1>
         <p className="p__opensans">ul. Białoruska 45, 30-633 Kraków</p>
         <p className="p__opensans">Tel. 602-897-304</p>
         <p className="p__opensans">e-mail: paring24h@info.krakow.pl</p>
     </div>
      <div className="app_footer-nav">
          <ul className="app__navbar-footer-links">
              {data.navList.map(navList => (<li className={navList.className}> <Link to={navList.to}> {navList.name} </Link></li>))}
          </ul>
      </div>
      <div className={"app__footer-logo"}>
          <img src={images.sign24h} alt ="app logo" />
      </div>
  </div>

);

export default Footer;
