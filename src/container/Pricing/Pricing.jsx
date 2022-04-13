import React from "react";

import { data, images } from "../../constants";
import { PricingItem } from "../../components";

import "./Pricing.scss";

const Pricing = () => (
  <div className="app__pricing flex__center " id="pricing">
    <div className="app__pricing-backgroundimage">
      <img
        className="app__pricing-backgroundimage-image"
        src={images.bg_pricing}
        alt="bg_parkinglot"
      />
    </div>
    <div className="app__pricing-title">
      <h1 className="headtext__cormorant">Cennik</h1>
    </div>
    <div className="app__pricing-pricing">
      <div className="app__pricing-subscription flex__center">
        <p className="app__pricing-heading">Cennik abonamentu</p>
        <div className="app__pricing-items">
          {data.subscription.map((vehicle, index) => (
            <PricingItem
              key={vehicle.title + index}
              title={vehicle.title}
              price={vehicle.price}
              tags={vehicle.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__pricing-day flex__center">
        <p className="app__pricing-heading">Opłata za dobę</p>
        <div className="app__pricing-items">
          {data.day.map((vehicle, index) => (
            <PricingItem
              key={vehicle.title + index}
              title={vehicle.title}
              price={vehicle.price}
              tags={vehicle.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__pricing-hourly flex__center">
        <p className="app__pricing-heading">Opłata za godzinę</p>
        <div className="app__pricing-items">
          {data.hourly.map((vehicle, index) => (
            <PricingItem
              key={vehicle.title + index}
              title={vehicle.title}
              price={vehicle.price}
              tags={vehicle.tags}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;
