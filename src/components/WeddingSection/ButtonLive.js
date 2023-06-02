import React from 'react';

import IconIg from './assets/instagram.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Hadir secara virtual melalui siaran langsung instagram: </p>
        <a href="https://www.instagram.com/lailaazmh" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper mb-4">
              <img src={IconIg} alt="Live IG" />
              <h6 className="text-white my-auto">@lailaazmh</h6>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
