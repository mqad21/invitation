import React from 'react';

import { styWrapper } from './styles';
import LQ from "@assets/images/LQ.svg"

function QuranSection() {

  return (
    <div css={styWrapper}>
      <div id="lq-quran">
        <div className="overlay" />
        <div className="container min-vh-100 d-flex py-4 ">
          <div className="my-auto">
          <div className="row justify-center">
              <div className="col col-auto pb-0">
                <img src={LQ} alt="lq" width="250"/>
              </div>
            </div>
            <div className="row justify-center">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
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
    </div>

  )
}

export default QuranSection;
