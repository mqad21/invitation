import React from 'react';
import WishesContainer from './WishesContainer';
import { styWrapper } from './styles';
import { useEffect, useState } from 'react';
import { getWishes } from '../../services/ApiService';

function WishesSection() {

  const [wishes, setWishes] = useState([]);

  const fetchWishes = async () => {
    getWishes().then((res) => {
      console.log('res', res)
      setWishes(res);
    });
  }

  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <div css={styWrapper}>
      <div className="overlay"></div>
      <div id="fh5co-testimonial" className="py-0">
        <div className="container d-flex py-4 min-vh-100">
          <div className="row justify-center my-auto">
            <div className="row justify-center">
              <div className="col text-center fh5co-heading">
                <h2 className="main-font">Doa & Ucapan</h2>
              </div>
            </div>
            <div className="row justify-center">
              <div className="col-11">
                <WishesContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default WishesSection;
