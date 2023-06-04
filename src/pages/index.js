import ReactFullpage from '@fullpage/react-fullpage';
import getQueryValue from '@helpers/getQueryValue';
import { object } from 'prop-types';
import React, { useState } from 'react';
/**
 * List of local components
 */
import FloatingMusic from '@components/FloatingMusic/Loadable';
import FooterSection from '@components/FooterSection';
import HelloSection from '@components/HelloSection';
import MainLayout from '@components/Layout';
import QuranSection from '@components/QuranSection';
import SendWishesSection from '@components/SendWishesSection';
import StorySection from '@components/StorySection';
import WeddingSection from '@components/WeddingSection';
import WelcomeSection from '@components/WelcomeSection';
import WishesSection from '@components/WishesSection';
import GiftSection from '@/components/GiftSection';
import { useEffect } from 'react';
import useWishes from '@/hooks/useWishes';
import { saveLog } from '@/services/ApiService';
import RsvpSection from '@/components/RsvpSection';

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  const firstName = guestName.replace(/ .*/, '');
  const isAnonymGuest = guestName === '' && !isInvitation;
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;
  const isRsvp = getQueryValue(location, 'type') == 'rsvp';
  const hideGift = getQueryValue(location, 'g') == '0';
  const [fullpage, setFullpage] = useState(null);

  const [showDetailContent, setShowDetailContent] = useState(false);

  const { total, wishes, fetchWishes, nextFetch } = useWishes()

  useEffect(() => {
    const localId = localStorage?.getItem('rZTrl3iOfg');
    const localName = localStorage?.getItem('name');

    if (!localId || localName !== guestName) {
      typeof window !== undefined && localStorage.setItem('rZTrl3iOfg', Math.random().toString(36).substr(2, 9));
    }

    if (!localName) {
      typeof window !== undefined && localStorage.setItem('name', guestName);
    }

    saveLog({
      guest: guestName,
      url: location.href
    })

  }, []);

  useEffect(() => {
    if (!isRsvp && document.getElementById('rsvp-section')) {
      typeof window !== undefined && document.getElementById('rsvp-section').classList.add('d-none');
    }

    if (hideGift && document.getElementById('gift-section')) {
      typeof window !== undefined && document.getElementById('gift-section').classList.add('d-none');
    }
  }, [location])

  return (
    <MainLayout>
      <ReactFullpage
        licenseKey='gplv3-license'
        scrollOverflow={true}
        paddingBottom={100}
        paddingTop={100}
        sensitivity={7}
        fitToSection={false}
        onLeave={(origin, destination, direction) => {
            if (destination.item.classList.contains('d-none')) {
              return false;
            }
        }}
        render={({ state, fullpageApi }) => {

          if (fullpageApi && !showDetailContent) {
            fullpageApi.setAllowScrolling(false);
          }

          if (!fullpage) {
            setFullpage(fullpageApi)
          }

          const handleClickDetail = () => {
            setShowDetailContent(true);
            fullpageApi.setAllowScrolling(true);
            fullpageApi.moveSectionDown();
          };

          const handleClickRsvp = () => {
            setShowDetailContent(true);
            fullpageApi.setAllowScrolling(true);
            fullpageApi.moveTo(3);
          };

          const goToPrevious = () => {
            fullpageApi.moveSectionUp();
          };

          if (state.destination) {
            if (state.destination.item.classList.contains('d-none')) {
              const nextIndex = state.direction === 'down' ? state.destination.index + 2 : state.destination.index;
              fullpageApi.moveTo(nextIndex);
            }
          }

          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <WelcomeSection
                  guestName={guestName}
                  isAnonymGuest={isAnonymGuest}
                  location={location}
                  codeLink={finalTicketLink}
                  onClickDetail={handleClickDetail}
                  onClickRsvp={handleClickRsvp}
                  showDetailContent={showDetailContent}
                  isRsvp={isRsvp}
                />
              </div>
              <div className="section special-section">
                <QuranSection />
              </div>
              <div id="rsvp-section" className="section">
                <RsvpSection />
              </div>
              <div className="section">
                <HelloSection location={location} isInvitation={isInvitation} hideGift={hideGift} />
              </div>
              <div className="section">
                <WeddingSection location={location} isInvitation={isInvitation} />
              </div>
              <div className="section">
                <StorySection />
              </div>
              <div className="section">
                <WishesSection wishes={wishes} nextFetch={nextFetch} total={total} />
              </div>
              <div className="section">
                <SendWishesSection
                  goToPrevious={goToPrevious}
                  guestName={guestName}
                  fetchWishes={fetchWishes}
                />
              </div>
              <div id="gift-section" className="section">
                <GiftSection />
              </div>
              <div className="section">
                <FooterSection isInvitation={true} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <FloatingMusic show={showDetailContent} />
    </MainLayout>
  )

}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
