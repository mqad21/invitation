import React, { useState } from 'react';

import { styWrapper } from './styles';
import { gifts } from './gift-data';
import GiftInformation from './GiftInformation';


function renderGiftInformation() {
  return gifts.map((gift, index) => <GiftInformation key={index} {...gift} />);
}

function GiftSection() {

  const [showGift, setShowGift] = useState(false);

  const toggleGift = () => {
    setShowGift(!showGift)
  }

  return (
    <div css={styWrapper}>
      <div id="lq-gift" className="glassmorphism-container min-vh-100">
        <div className="overlay" />

        <div className="container min-vh-100 d-flex py-4">
          <div className="m-auto">
            <div className="row justify-center">
              <div className="col-md-12 text-center fh5co-heading animate-box">
                <h2 className="main-font">Hadiah Pernikahan</h2>
              </div>
            </div>
            <div className="glassmorphism p-4 mb-4 glassmorphism-single">
              <div className="row justify-center">
                <div className="col-md-10 text-center fh5co-heading">
                  <p className="info">
                    Doa restu keluarga, sahabat, serta rekan-rekan semua di pernikahan kami sudah sangat cukup sebagai hadiah. Tetapi jika memberi merupakan tanda kasih, kami dengan senang hati menerimanya dan tentu semakin melengkapi kebahagiaan kami.
                  </p>
                  {/* Button Beri Hadiah */}
                  <a onClick={toggleGift} className="btn btn-primary btn-gift">
                    🤍 Kirim Hadiah
                  </a>
                </div>
              </div>
            </div>
            {showGift && <div className="container">
              {renderGiftInformation()}
            </div>}
          </div>
        </div>
      </div>
    </div>

  )
}

export default GiftSection;
