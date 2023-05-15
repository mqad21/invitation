import React from 'react';
import WishesContainer from './WishesContainer';

function WishesSection() {
  return (
    <div id="fh5co-testimonial">
      <div className="container">
        <div className="row justify-center">
          <div className="row justify-center">
            <div className="col-md-8 text-center fh5co-heading">
              <h2 className="main-font">Dari Sahabat</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <WishesContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishesSection;
