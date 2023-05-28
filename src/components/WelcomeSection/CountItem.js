import React from 'react';
import { number, string } from 'prop-types';
import { styWrapperCount } from './styles';

function CountItem({ number, text }) {

  const padZero = (num) => num.toString().padStart(2, '0');

  return (
    <div css={styWrapperCount}>
      <h3>{padZero(number)}</h3>
      <span>{text}</span>
    </div>
  );
}

CountItem.propTypes = {
  number: number.isRequired,
  text: string.isRequired,
};

export default React.memo(CountItem);
