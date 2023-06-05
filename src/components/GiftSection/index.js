import React, { useState } from 'react';

import { styWrapper } from './styles';
import { gifts } from './gift-data';
import GiftInformation from './GiftInformation';
import { useInView, animated } from '@react-spring/web';


function renderGiftInformation() {
  return gifts.map((gift, index) => <GiftInformation key={index} {...gift} />);
}

function GiftSection() {

  const [showGift, setShowGift] = useState(false);

  const toggleGift = () => {
    setShowGift(!showGift)
  }

  const [ref0, animate0] = useInView(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
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


  const [ref1, animate1] = useInView(
    () => ({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
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
      <div className="lq-gift glassmorphism-container min-vh-100">
        <div className="overlay" />
        <animated.div ref={ref0} style={animate0} className="container min-vh-100 d-flex py-4">
          <div className="m-auto">
            <div className="row justify-center">
              <div className="col-md-12 text-center fh5co-heading animate-box">
                <h2 className="main-font">Hadiah Pernikahan</h2>
              </div>
            </div>
            <div className="glassmorphism p-4 mb-4 glassmorphism-single">
              <div className="row justify-center">
                <div className="col-md-10 text-center fh5co-heading">
                  <p className="info">
                    Mendoakan kebaikan adalah sebaik-baiknya hadiah. Doa restu dari keluarga, sahabat, serta rekan-rekan semua merupakan hadiah terbaik untuk pernikahan kami. Kehadiran keluarga, sahabat, serta rekan-rekan sudah cukup membuat kami merasa beruntung.  Namun, apabila memberi materi merupakan tanda kasih, kami tidak bisa lebih bersyukur menerimanya dan tentu semakin melengkapi kebahagiaan kami.
                  </p>
                  {/* Button Beri Hadiah */}
                  <a onClick={toggleGift} className="btn btn-primary btn-gift">
                    🤍 Kirim Hadiah
                  </a>
                </div>
              </div>
            </div>
            {
              showGift && <animated.div className="container" ref={ref1} style={animate1}>
                {renderGiftInformation()}
              </animated.div>
            }
          </div>
        </animated.div>
      </div>
    </div>

  )
}

export default GiftSection;
