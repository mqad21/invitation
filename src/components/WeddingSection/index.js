import { bool } from 'prop-types';
import React from 'react';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';
import getQueryValue from '@helpers/getQueryValue';

function WeddingSection({ isInvitation, location }) {
  const isUnduhMantu = decodeURIComponent(getQueryValue(location, 'u') || '') === '1';


  // const renderGuestInfo = () => {
  //   return (
  //     <Fragment>
  //       <div className="col-md-8 col-md-offset-4">
  //         <WeddingInfoBox title="Akad Nikah" time="08.00 WIB (Live di Instagram)" date="Sabtu, 03 Oktober 2020" />
  //       </div>
  //       <ButtonLive />
  //     </Fragment>
  //   );
  // };


  return (
    <div css={styWrapper}>
      <div id="fh5co-event">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-center">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <div className="bismillah">بسم الله الرحمن الرحيم</div>
              <span className="sub-title sub-title__wedding">Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami yang Insyaa Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row justify-center">
            <div className="col-md-10 col-md-offset-1">
              <div className="row justify-center">
                {!isUnduhMantu &&
                  <WeddingInfoBox
                    title="Akad Nikah"
                    time="08.00 WIB"
                    day="Sabtu"
                    date="24  Juni  2023"
                    description="Joglo Kopi Jolotundo<br/><small>Sogan, Wates, Kulon Progo, D.I.Yogyakarta</small>"
                    link="https://goo.gl/maps/Htf1ffVCu8mgbXx5A"
                  />
                }
                {!isUnduhMantu &&
                  <WeddingInfoBox
                    title="Walimah"
                    time="11.00 - 13.00 WIB"
                    day="Sabtu"
                    date="24  Juni  2023"
                    description="Joglo Kopi Jolotundo<br/><small>Sogan, Wates, Kulon Progo, D.I.Yogyakarta</small>"
                    link="https://goo.gl/maps/Htf1ffVCu8mgbXx5A"
                  />
                }
                {isUnduhMantu &&
                  <WeddingInfoBox
                    title="Akad & Walimah"
                    day="Sabtu"
                    date="24  Juni  2023"
                    description="Joglo Kopi Jolotundo<br/><small>Sogan, Wates, Kulon Progo, D.I.Yogyakarta</small>"
                  />
                }
                <WeddingInfoBox
                  title="Ngunduh Mantu"
                  time="10.00 - 18.00 WIB"
                  day="Sabtu"
                  date="08  Juli  2023"
                  description="Waroeng Pondok Bambu<br/><small>Jalan Kebun Kopi Marindal 1
                    Kec. Patumbak, Deli Serdang, Sumut</small>"
                  link="https://goo.gl/maps/8RU5NXfahGzhzZfU9"
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
