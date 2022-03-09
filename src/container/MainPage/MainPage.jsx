import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutUs, FindUs, Footer, Header, Pricing } from '../index.js';

const MainPage = () => {
    return(
        <div>
          <Header/>
          <AboutUs />
            <FindUs />
          <Pricing />
          <Footer />
        </div>
    )};
export default MainPage;
