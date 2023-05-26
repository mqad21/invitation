import React, { useEffect, useState } from 'react';
import { string, bool } from 'prop-types';
import { styWrapperItem, styWithAnimation } from './styles';
import moment from 'moment'
import 'moment/locale/id'

function WishesItem({ message, name, created_at, updated_at, isActive }) {

  const [humanDiff, setHumanDiff] = useState('')

  const getHumanDiff = () => {
    setHumanDiff(moment(updated_at).locale('id-ID').fromNow())
  }

  useEffect(() => {
    getHumanDiff()
    setInterval(() => {
      getHumanDiff()
    }, 60 * 1000)
  }, [])

  const renderItem = () => {
    return (
      <div css={styWrapperItem}>
        <div className={`item glassmorphism p-4 ${isActive ? 'active' : 'hide'} testimony-slide text-center`}>
          <h4>{name}</h4>
          <span className="infoName">{humanDiff}</span>
          <blockquote className="mb-0">
            <p className="description">{message}</p>
          </blockquote>
        </div>
      </div>
    );
  };

  return <div css={styWithAnimation(isActive)}>{renderItem()}</div>;
}

WishesItem.propTypes = {
  name: string.isRequired,
  message: string.isRequired,
  created_at: string.isRequired,
  isActive: bool.isRequired,
  updated_at: string.isRequired
};

export default React.memo(WishesItem);
