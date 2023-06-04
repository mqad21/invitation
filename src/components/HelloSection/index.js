import React from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/laila_square.jpg';
import Groom from '@assets/images/qadri_square.jpg';
import getQueryValue from '@helpers/getQueryValue';

import { styWrapper } from './styles';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function HelloSection({ location, hideGift }) {
  const finalSubtitle = '24 . 06 . 23';

  const [showTitle, setShowTitle] = useState(false)

  useEffect(() => {
    setShowTitle(getQueryValue(location, 't') == '1')
  }, [location])

  return (
    <div css={styWrapper(showTitle)}>
      <div id="lq-couple">
        <div className="overlay" />
        <div className="container min-vh-100 d-flex py-4 ">
          <div className="my-auto">
            <div className="row justify-center">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font main-font-salam">Assalamu'a'laikum warahmatullahi wabarakatuh</h2>
                <h3 className="sub-title hs">{finalSubtitle}</h3>
                <p className="info">
                  Dengan memohon Rahmat dan Ridha Allah ﷻ, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a restu Bapak/Ibu/Saudara/i agar senantiasa diberikan kelancaran dan keberkahan dalam rangka melangsungkan pernikahan {hideGift ? 'anak kami' : 'kami'}:
                </p>
              </div>
            </div>
            <div className="couple-wrap">
              <div className="couple-half">
                <div className="groom">
                  <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
                </div>
                <div className="desc-groom glassmorphism">
                  <h3 className="main-font">Laila Azzamah Ibda Nafisa<span className="title">, S.Tr.Stat</span></h3>
                  <p className="parent-name parent-name__top">
                    Putri Bapak Mutijo<span className="title">, S.Si., M.Si.</span> &<br />Ibu Wahyu Wijayanti<span className="title">, S.Pd.</span><br />
                    <small>
                      <i>Kularan, Triharjo, Wates, Kulon Progo, D.I.Yogyakarta</i>
                    </small>
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
                <div className="desc-bride glassmorphism">
                  <h3 className="main-font">Muhammad Qadri<span className="title">, S.Tr.Stat</span></h3>
                  <p className="parent-name">
                    Putra Bapak <span className="title">Drs. </span>Muhammad Amin &<br />Ibu <span className="title">Dra. </span>Fauziah<br />
                    <small>
                      <i>Marindal I, Patumbak, Deli Serdang, Sumatera Utara</i>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
