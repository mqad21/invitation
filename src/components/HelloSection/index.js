import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/laila_square.jpg';
import Groom from '@assets/images/qadri_square.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = 'Sabtu, 24 Juni 2023';

  return (
    <div id="lq-couple" className="lq-scrollable">
      <div className="container my-auto">

        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font main-font-salam">Assalamu'a'laikum warahmatullahi wabarakatuh</h2>
            <h3 className="sub-title hs">{finalSubtitle}</h3>
            <p className="info">
              Dengan memohon Rahmat dan Ridho Allah ﷻ, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
              rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
              keberkahan.
            </p>
          </div>
        </div>
        <div className="couple-wrap">
          <div className="couple-half">
            <div className="groom">
              <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
            </div>
            <div className="desc-groom">
              <h3 className="main-font">Laila Azzamah Ibda Nafisa</h3>
              <p className="parent-name parent-name__top">
                Putri Bapak Mutijo <br />& Ibu Wahyu Wijayanti
              </p>
            </div>
          </div>
          <p className="heart text-center">
            <i className="icon-heart2"></i>
          </p>
          <div className="and-love">
            <i>&</i>
          </div>
          <div className="couple-half">
            <div className="bride">
              <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
            </div>
            <div className="desc-bride">
              <h3 className="main-font">Muhammad Qadri</h3>
              <p className="parent-name">
                Putra Bapak Muhammad Amin <br />& Ibu Fauziah
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

  return (
    <div id="fh5co-couple" css={styWrapper}>
      <div className="container my-auto scrollable-element">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font main-font-salam">Assalamu'a'laikum<br /><small>warahmatullahi wabarakatuh</small></h2>
            <h3 className="sub-title hs">{finalSubtitle}</h3>
            <p className="info">
              Dengan memohon Rahmat dan Ridho Allah ﷻ, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
              rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
              keberkahan.
            </p>
          </div>
        </div>
        <div className="couple-wrap">
          <div className="couple-half">
            <div className="groom">
              <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
            </div>
            <div className="desc-groom">
              <h3 className="main-font">Laila Azzamah Ibda Nafisa</h3>
              <p className="parent-name parent-name__top">
                Putri Bapak Mutijo <br />& Ibu Wahyu Wijayanti
              </p>
            </div>
          </div>
          <p className="heart text-center">
            <i className="icon-heart2"></i>
          </p>
          <div className="and-love">
            <i>&</i>
          </div>
          <div className="couple-half">
            <div className="bride">
              <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
            </div>
            <div className="desc-bride">
              <h3 className="main-font">Muhammad Qadri</h3>
              <p className="parent-name">
                Putra Bapak Muhammad Amin <br />& Ibu Fauziah
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <p className="info">
              <ul>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
                <li>Acara akan dilaksanakan pada hari Sabtu, 24 Juni 2023</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
