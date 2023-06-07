import { bool } from 'prop-types';
import React from 'react';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';
import getQueryValue from '@helpers/getQueryValue';
import { useInView, animated } from '@react-spring/web'

function WeddingSection({ isInvitation, location, hideGift }) {
  const isUnduhMantu = decodeURIComponent(getQueryValue(location, 'u') || '') === '1';

  const [ref0, animate0] = useInView(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 700,
        easing: (t) => t * (2 - t),
      },
      delay: 1000
    }),
    {
      once: true,
      rootMargin: '-20% 0%',
    }
  )

  return (
    <div css={styWrapper}>
      <div id="fh5co-event">
        <div className="overlay" />
        <div className="container min-vh-100">
          <div className="row justify-center">
            <animated.div ref={ref0} style={animate0} className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <div className="bismillah">بسم الله الرحمن الرحيم</div>
              <span className="sub-title sub-title__wedding">Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan {hideGift ? 'anak kami' : 'kami'} yang Insyaa Allah akan diselenggarakan pada:</span>
            </animated.div>
          </div>
          <div className="row justify-center">
            <div className="col-md-10 col-md-offset-1">
              <div className="row justify-center">
                {!isUnduhMantu &&
                  <WeddingInfoBox
                    key="akad"
                    title="Akad Nikah"
                    time="08.00 WIB"
                    day="Sabtu"
                    date="24  Juni  2023"
                    description="Joglo Kopi Jolotundo"
                    subdescription="Sogan, Wates, Kulon Progo, D.I.Yogyakarta"
                    link="https://goo.gl/maps/Htf1ffVCu8mgbXx5A"
                  />
                }
                {!isUnduhMantu &&
                  <WeddingInfoBox
                    key="Walimah"
                    title="Walimah"
                    time="11.00 - 13.00 WIB"
                    day="Sabtu"
                    date="24  Juni  2023"
                    description="Joglo Kopi Jolotundo"
                    subdescription="Sogan, Wates, Kulon Progo, D.I.Yogyakarta"
                    link="https://goo.gl/maps/Htf1ffVCu8mgbXx5A"
                    fromLeft={false}
                  />
                }
                {isUnduhMantu &&
                  <WeddingInfoBox
                    key="AkadWalimah"
                    title="Akad & Walimah"
                    day="Sabtu"
                    date="24  Juni  2023"
                    description="Joglo Kopi Jolotundo"
                    subdescription="Sogan, Wates, Kulon Progo, D.I.Yogyakarta"
                    fromLeft={false}
                  />
                }
                <WeddingInfoBox
                  key="NgunduhMantu"
                  title="Ngunduh Mantu"
                  time="10.00 - 18.00 WIB"
                  day="Sabtu"
                  date="08  Juli  2023"
                  description="Waroeng Pondok Bambu"
                  subdescription="Jalan Kebun Kopi Marindal 1 Kec. Patumbak, Deli Serdang, Sumut"
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
