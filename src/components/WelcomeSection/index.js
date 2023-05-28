import { Link } from 'gatsby';
import { bool, func, object, string } from 'prop-types';
import React, { Fragment } from 'react';

import WeddingImg from '@assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styBackground, styButtonWrapper, styHero, styWrapper } from './styles';

function WelcomeSection({ guestName, isAnonymGuest, onClickDetail, showDetailContent, isRsvp, onClickRsvp }) {

  const playAudio = () => {
    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }
  }

  const handleShowDetail = () => {
    playAudio();
    onClickDetail();
  };

  const handleClickRsvp = () => {
    playAudio();
    onClickRsvp();
  };

  const renderGuestSection = () => {
    if (isRsvp) return (
      <div className="row justify-center">
        <div className="col-md-6 col-8">
          <div id="rsvp"  onClick={handleClickRsvp} className="btn btn-primary btn-block">Konfirmasi Kehadiran</div>
        </div>
      </div>
    );

    if (isAnonymGuest) return <h2 className="to-dearest-name">Yth. Undangan</h2>;

    return (
      <Fragment>
        <h3 className="to-dearest">Yth. Bapak/Ibu/Saudara/i</h3>
        <h2 className="to-dearest-name">{guestName}</h2>
      </Fragment>
    );
  };

  return (

    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover overflow-auto"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container d-flex min-vh-100 py-4 welcome-container">
          <div className="m-auto">
            <div className="row justify-center" css={styWrapper}>
              <div className="col-12 text-center">
                <img src={WeddingImg} alt="wedding-dinda-indra" />
                <h4 className="sub-title">Walimatul 'Urs</h4>
                <h1 className="title">Laila &amp; Qadri</h1>
                <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                  <CountContainer />
                </div>
                {renderGuestSection()}
              </div>
            </div>
            {(!showDetailContent && !isRsvp) && <div className="row justify-center">
              <ScrollToDown loading={false} onClick={handleShowDetail} />
            </div>}
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
  onClickRsvp: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
