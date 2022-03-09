import React from 'react';
import images from "../../constants/images";
import './AboutUs.scss';

const AboutUs = () => (
  <div className ="app__aboutus">
  <div className="aboutus__image">
    <img src={images.r8_parking} alt ="app logo" />
  </div>
    <div className="aboutus__text-content">
    <h1 className="aboutus__title">Dlaczego my?</h1>
    <ul className="aboutus__list">
      <li className="p__opensans">- Parking strzeżony 24/h 7 dni w tygodniu</li>
      <li className="p__opensans">- Abonamenty dobowe/miesięczne</li>
      <li className="p__opensans">- Monitoring oraz oświetlenie</li>
      <li className="p__opensans">- Konkurencyjne ceny</li>
      <li className="p__opensans">- Lokalizacja w centrum Woli Duchackiej</li>
      <li className="p__opensans">- Gwarantujemy bezpieczeństwo i komfort</li>
      <li className="p__opensans">- 120 miejsc parkingowych na wyłączną rezerwacje</li>
    </ul>
    </div>
  </div>
);

export default AboutUs;
