import { Link } from 'gatsby';
import { bool, func, object, string } from 'prop-types';
import React, { Fragment } from 'react';

import WeddingImg from '@assets/images/wedding-logo.png';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styBackground, styButtonWrapper, styHero, styWrapper } from './styles';
import { useSpring, animated } from '@react-spring/web'

function WelcomeSection({ guestName, isAnonymGuest, onClickDetail, showDetailContent, isRsvp, onClickRsvp }) {

  const [animate1] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 2000 },
    }),
    []
  )

  const [animate2] = useSpring(
    () => ({
      from: { opacity: 0, scale: 0.2 },
      to: { opacity: 1, scale: 1 },
      config: {
        duration: 700,
        easing: (t) => t * (2 - t),
      },
      delay: 700,
    }),
    []
  )

  const [animate3] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 1000, 
        easing: (t) => t * (2 - t),
      },
      delay: 1500,
    }),
    []
  )


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
          <div id="rsvp" onClick={handleClickRsvp} className="btn btn-primary btn-block">Konfirmasi Kehadiran</div>
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
                <animated.div style={animate1}>
                  <img src={WeddingImg} alt="wedding-dinda-indra" />
                  <h4 className="sub-title">Walimatul 'Urs</h4>
                  <h1 className="title">Laila &amp; Qadri</h1>
                </animated.div>
                <animated.div style={animate3} className={isAnonymGuest ? 'margin__bottom' : ''}>
                  <CountContainer />
                </animated.div>
                <animated.div style={animate2}>
                  {renderGuestSection()}
                </animated.div>
              </div>
            </div>
            <animated.div style={animate1}>
              {(!showDetailContent && !isRsvp) && <div className="row justify-center">
                <ScrollToDown loading={false} onClick={handleShowDetail} />
              </div>}
            </animated.div>
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
