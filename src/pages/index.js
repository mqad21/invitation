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

  const [showDetailContent, setShowDetailContent] = useState(false);

  const { total, wishes, fetchWishes, nextFetch } = useWishes()

  const [hideGift, setHideGift] = useState(false)
  const [isRsvp, setIsRsvp] = useState(false)

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
    setHideGift(getQueryValue(location, 'g') === '0')
    setIsRsvp(getQueryValue(location, 'type') === 'rsvp')
  }, [location])

  return (
    <MainLayout>
      <ReactFullpage
        licenseKey='gplv3-license'
        scrollOverflow={true}
        paddingBottom={100}
        paddingTop={100}
        sensitivity={7}
        onLeave={(origin, destination, direction) => {
          if (destination.index === 2) {
          }
        }}
        render={({ state, fullpageApi }) => {

          if (fullpageApi && !showDetailContent && (!isRsvp && !hideGift)) {
            fullpageApi.setAllowScrolling(false);
          }

          const handleClickDetail = () => {
            if (hideGift) {
              fullpageApi.reBuild();
            }
            fullpageApi.setAllowScrolling(true);
            fullpageApi.moveTo(2);
            setTimeout(() => {
              if (!showDetailContent && document.getElementById("detail")) {
                document.getElementById("detail").click();
                setShowDetailContent(true);
              }
            }, 100)
          };

          const handleClickRsvp = () => {
            fullpageApi.reBuild();
            setShowDetailContent(true);
            fullpageApi.setAllowScrolling(true);
            fullpageApi.moveTo(3);
            setTimeout(() => {
              if (!showDetailContent && isRsvp) {
                document.getElementById("rsvp").click();
              }
            }, 100)
          };

          const goToPrevious = () => {
            fullpageApi.moveSectionUp();
          };

          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <WelcomeSection
                  guestName={guestName}
                  isAnonymGuest={isAnonymGuest}
                  isInvitation={isInvitation}
                  location={location}
                  codeLink={finalTicketLink}
                  onClickDetail={handleClickDetail}
                  showDetailContent={showDetailContent}
                  isRsvp={isRsvp}
                  onClickRsvp={handleClickRsvp}
                />
              </div>
              <div className="section">
                <QuranSection />
              </div>
              <div className={!isRsvp ? 'd-none' : 'section'}>
                <RsvpSection />
              </div>
              <div className="section">
                <HelloSection location={location} isInvitation={isInvitation} />
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
              <div className={hideGift ? 'd-none' : 'section'}>
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
