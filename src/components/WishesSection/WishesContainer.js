import React, { useState, useEffect, useCallback } from 'react';

import WishesItem from './WishesItem';
import { styButtonWrapper } from './styles';

const INTERVAL_SLIDE = 35000;

function WishesContainer({ wishlist = [], nextFetch }) {
  const [active, setActive] = useState(0);
  const [pauseSlide, setPauseSlide] = useState(false);
  const totalWishes = wishlist.length || 0;

  const handleSetActive = (isNext = true) => {
    if (isNext) {
      if (active === totalWishes - 1) {
        if (active === 0) {
          nextFetch();
        }
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(totalWishes - 1);
      } else {
        setActive(active - 1);
      }
    }

    setPauseSlide(true);

    setTimeout(() => {
      setPauseSlide(false);
    }, INTERVAL_SLIDE);
  };

  const handleSetNext = useCallback(() => {
    if (active === wishlist.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, [active]);

  useEffect(() => {
    if (active >= wishlist.length - 3) {
      nextFetch();
    }
  }, [active]);

  const renderWishlist = () => {
    if (wishlist.length == 0) {
      return <p className="text-center font-italic">Belum ada doa & ucapan</p>
    }
    return wishlist.map((w, index) => <WishesItem key={w.id} {...w} isActive={index === active} />);
  };

  /** Side effect to autoscroll */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseSlide) {
        handleSetNext();
      } else {
        clearInterval(interval);
      }
    }, INTERVAL_SLIDE);

    return () => clearInterval(interval);
  }, [handleSetNext, pauseSlide]);

  return (
    <div className="wrap-testimony">
      {renderWishlist()}
      <div css={styButtonWrapper}>
        <button disabled={active == 0} className="btn btn-sm button-nav" onClick={() => handleSetActive(false)}>{`< Sebelumnya`}</button>
        <button disabled={active == wishlist.length - 1 && active != 0} className="btn btn-sm button-nav" onClick={() => handleSetActive(true)}>{`Selanjutnya >`}</button>
      </div>
    </div>
  );
}

export default React.memo(WishesContainer);
