import { Link } from 'gatsby';
import { bool, func, object, string } from 'prop-types';
import React, { Fragment } from 'react';

import WeddingImg from '@assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styBackground, styButtonWrapper, styHero, styWrapper } from './styles';

function WelcomeSection({ guestName, isAnonymGuest, onClickDetail, showDetailContent }) {

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

  const renderGuestSection = () => {
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
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container py-4">
          <div className="row justify-center" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingImg} alt="wedding-dinda-indra" />
              <h4 className="sub-title">Walimatul 'Urs</h4>
              <h1 className="title">Laila &amp; Qadri</h1>
              <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                <CountContainer />
              </div>
              {renderGuestSection()}
            </div>
          </div>
          {!showDetailContent && <div className="row justify-center">
            <ScrollToDown loading={false} onClick={handleShowDetail} />
          </div>}
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
