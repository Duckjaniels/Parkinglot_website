import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.scss';
import {PhotoCarousel} from "../../components/PhotoCarousel/PhotoCarousel";




const Header = () => {
    return(
        <header>
      <div className="header__carousel">
          <PhotoCarousel/>
      </div>

        </header>
)};
export default Header;
