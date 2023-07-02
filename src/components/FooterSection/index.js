import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../FooterSection/styles';
import LQ from "@assets/images/LQ.svg"
import { useInView, animated } from '@react-spring/web';

function FooterSection({ isInvitation, hideGift }) {

  const [ref1, animate1] = useInView(
    () => ({
      from: { opacity: 0, y: 200 },
      to: { opacity: 1, y: 0 },
      config: {
        duration: 900,
        easing: (t) => t * (2 - t),
      },
      delay: 500
    }),
    {
      once: true,
      rootMargin: '0% 0%',
    }
  )

  return (
    <div css={styWrapper}>
      <div className="lq-footer">
        <div className="overlay"></div>
        <div className="container min-vh-100 d-flex py-4">
          <animated.div ref={ref1} style={animate1} className="m-auto w-100">
            <div className="row">
              <div className="col text-center fh5co-heading">
                <h2 className="main-font mb-4">Terima Kasih</h2>
                <p className="info glassmorphism glassmorphism-single m-auto p-4">
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do’a restunya untuk keberkahan pernikahan {hideGift ? 'anak kami' : 'kami'}.<br />
                  Wassalamu'alaikum warahmatullahi wabarakatuh
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <footer id="fh5co-footer" role="contentinfo">
                <div className="container">
                  <div className="row copyright">
                    <div className="col-md-12 text-center">
                      <p>
                        <img src={LQ} alt="lq" width="250" />
                        <small className="block">&copy; 2023 Qadri & Laila. All Rights Reserved.</small>
                        <small className="block">
                          Sound by{' '}
                          <a href="https://www.youtube.com/watch?v=aTp-PfeZQ-g&pp=ygUXaW5zdHJ1bWVudCBjaW50YW55YSBha3U%3D" target="_blank" rel="noreferrer">
                            Tiara Andini, Arsy Widianto - Cintanya Aku - Peaceful Piano
                          </a>
                        </small>
                        <small className="block">
                          Original Template from{' '}
                          <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                            FREEHTML5.co
                          </a>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default FooterSection;
