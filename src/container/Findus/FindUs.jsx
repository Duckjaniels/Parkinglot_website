import React from 'react';
import {LeafletMap} from '../../components/index'
import './FindUs.scss';

const FindUs = () => (
  <div className="app__findus">
      <h1 className="findus__title">Lokalizacja</h1>
      <div className="findus__content">
      <div className="findus__map">
        <LeafletMap/>
      </div>
          <div className="findus__content-right">
         <ul className="findus__content-list">
             <li className="p__opensans">Stacja paliw Circle key <span>500m</span></li>
             <li className="p__opensans">Szpitał św. Rafała <span>1km</span></li>
             <li className="p__opensans">Osiedle lokum Vista <span>1km</span></li>
             <li className="p__opensans">Castorama  <span>1.5km</span></li>
             <li className="p__opensans">Bonarka city-center <span>2km</span></li>
         </ul>
              <a target="_blank" rel="noreferrer"  href="https://goo.gl/maps/6eJri8Ff7SYJHtAS8" className="findus__conent-button"> Wyznacz trasę</a>
              </div>
  </div>
  </div>

);

export default FindUs
