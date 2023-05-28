import React from 'react';
import WishesContainer from './WishesContainer';
import { styWrapper } from './styles';

function WishesSection({ wishes, nextFetch, total }) {

  return (
    <div css={styWrapper}>
      <div className="overlay"></div>
      <div id="fh5co-testimonial" className="py-0">
        <div className="container d-flex p-4 min-vh-100">
          <div className="m-auto">
            <div className="row justify-center">
              <div className="col text-center fh5co-heading">
                <h2 className="main-font">Doa & Ucapan</h2>
                <p className="sub-title">
                  “Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, dan mengumpulkan kalian berdua dalam kebaikan”
                  [HR. Abu Daud]
                </p>
              </div>
            </div>
            <div className="row justify-center">
              <div className="col-md-9 col-12">
                <WishesContainer wishlist={wishes} nextFetch={nextFetch} total={total} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default WishesSection;
