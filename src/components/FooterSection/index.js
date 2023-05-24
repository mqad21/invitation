import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../FooterSection/styles';

function FooterSection({ isInvitation }) {
  return (
    <div css={styWrapper}>
      <div id="lq-footer">
        <div className="overlay"></div>
        <div className="container min-vh-100 d-flex py-4">
          <div className="m-auto w-100">
            <div className="row">
              <div className="col text-center fh5co-heading">
                <h2 className="main-font mb-4">Terima Kasih</h2>
                <p className="info glassmorphism glassmorphism-single m-auto py-3">
                  Atas segala do'a dan restu saudara/i,
                  <br /> kami ucapkan terima kasih. <br />
                  Wassalamu'alaikum warahmatullahi wabarakatuh.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <footer id="fh5co-footer" role="contentinfo">
                <div className="container">
                  <div className="row copyright">
                    <div className="col-md-12 text-center">
                      <p>
                        <small className="block">&copy; 2023 Laila & Qadri. All Rights Reserved.</small>
                        <small className="block">
                          Song by{' '}
                          <a href="https://www.youtube.com/watch?v=fb167KAxvrg" target="_blank" rel="noreferrer">
                            Anandito Anisa - Pernikahan Impian
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
          </div>
        </div>
      </div>
    </div>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default FooterSection;
