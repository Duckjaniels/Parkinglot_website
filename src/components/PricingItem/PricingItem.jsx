import React from 'react';

import './PricingItem.scss';

const PricingItem = ({title, price, tags}) => (
  <div className="app__pricingItem">
    <div className="app__pricingItem-head">
        <div className="app__pricingItem-name">
            <p className="p__cormorant" style={{color: '#FCF5E5'}}>{title}</p>
        </div>
        <div className="app__pricingItem-dash"/>
        <div className="app__pricingItem-price">
            <p className="p__cormorant">{price}</p>
        </div>
    </div>
      <div className="app__pricingItem-sub">
          <p className="p__opensans" style={{color: '#AAA'}}>{tags}</p>
      </div>
  </div>
);

export default PricingItem;
