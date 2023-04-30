import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="Akad Nikah" time="08.00 WIB (Live di Instagram)" date="Sabtu, 03 Oktober 2020" />
        </div>
        <ButtonLive />
      </Fragment>
    );
  };

  return (
    <div css={styWrapper}>
      <div id="fh5co-event">
        <div className="container my-auto">
          <div className="row justify-center">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <div className="bismillah">بسم الله الرحمن الرحيم</div>
              <span className="sub-title sub-title__wedding">Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami yang Insyaa Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row justify-center">
            <div className="col-md-10 col-md-offset-1">
              <div className="row justify-center">
                <WeddingInfoBox
                  title="Akad Nikah"
                  time="08.00 - 09.00 WIB"
                  date="Sabtu, 24 Juni 2023"
                  description="Joglo Kopi Jolotundo<br/><small>Sogan, Wates, Kulon Progo, D.I.Yogyakarta</small>"
                />
                <WeddingInfoBox
                  title="Walimah"
                  time="11.00 - 13.00 WIB"
                  date="Sabtu, 24 Juni 2023"
                  description="Joglo Kopi Jolotundo<br/><small>Sogan, Wates, Kulon Progo, D.I.Yogyakarta</small>"
                />
                <WeddingInfoBox
                  title="Unduh Mantu"
                  time="10.00 - 18.00 WIB"
                  date="Sabtu, 8 Juli 2023"
                  description="Cafe Pondok Bambu<br/><small>Jalan Kebun Kopi Pasar V, Marindal I, Patumbak, Deli Serdang, Sumatera Utara</small>"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
