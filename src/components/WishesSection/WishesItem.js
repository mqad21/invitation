import React from 'react';
import { string, bool } from 'prop-types';
import { styWrapperItem, styWithAnimation } from './styles';

function WishesItem({ message, name, dateTime }) {

  const renderItem = () => {
    return (
      <div className="item glassmorphism p-4" css={styWrapperItem}>
        <div className={`testimony-slide text-center`}>
          <h4>{name}</h4>
          <span className="infoName">{dateTime}</span>
          <blockquote className="mb-0">
            <p className="description">{message}</p>
          </blockquote>
        </div>
      </div>
    );
  };

  return <div css={styWithAnimation(true)}>{renderItem()}</div>;
}

WishesItem.propTypes = {
  name: string.isRequired,
  message: string.isRequired,
  dateTime: string.isRequired,
};

export default React.memo(WishesItem);
