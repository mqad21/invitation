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
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container my-auto">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <div className="bismillah">بسم الله الرحمن الرحيم</div>
              <h2 className="main-font main-font__wedding">Akad Nikah dan Walimah</h2>
              <span className="sub-title sub-title__wedding">Insyaa Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
