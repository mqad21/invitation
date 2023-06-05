import React from 'react';

import { styWrapper } from './styles';
import LQ from "@assets/images/LQ.svg"
import { useInView, animated } from '@react-spring/web'

function QuranSection() {

  const [ref, springs] = useInView(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 700,
        easing: (t) => t * (2 - t),
      },
      delay: 500
    }),
    {
      once: true,
      rootMargin: '-20% 0%'
    }
  )

  return (
    <animated.div ref={ref} style={springs} css={styWrapper}>
      <div id="lq-quran" className="glassmorphism-container">
        <div className="overlay" />
        <div className="container min-vh-100 d-flex py-4">
          <div className="m-auto w-100 glassmorphism p-4 glassmorphism-single">
            <div className="row justify-center">
              <div className="col col-auto pb-0">
                <img src={LQ} alt="lq" width="250" />
              </div>
            </div>
            <div className="row justify-center">
              <div className="col-10 text-center fh5co-heading">
                <p className="info">
                  Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,
                  supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
                  Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.
                </p>
                <p className="info">
                  (QS. Ar-Rum: 21)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>

  )
}

export default QuranSection;
