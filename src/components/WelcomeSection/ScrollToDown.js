import React from 'react';

import { styScrollWrapper } from './styles';
import { bool, func } from 'prop-types';

function ClickToSeeDetail({ loading, onClick }) {
  return (
    <div id="detail" css={styScrollWrapper} onClick={onClick}>
      <section id="scroll" className="scroll__icon">
        <div className="button">
          <span></span>
        </div>
        <span className="text">{loading ? 'Menyiapkan data..' : 'Buka Undangan'}</span>
      </section>
    </div>
  );
}

ClickToSeeDetail.propTypes = {
  loading: bool.isRequired,
  onClick: func.isRequired,
};

export default ClickToSeeDetail;
