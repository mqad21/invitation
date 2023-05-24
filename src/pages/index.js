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

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const hideGift = decodeURIComponent(getQueryValue(location, 'g') || '') === '0';
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  const firstName = guestName.replace(/ .*/, '');
  const isAnonymGuest = guestName === '' && !isInvitation;
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;

  const [showDetailContent, setShowDetailContent] = useState(false);

  useEffect(() => {
    const localId = localStorage?.getItem('rZTrl3iOfg');
    const localName = localStorage?.getItem('name');
    if (!localId || localName !== guestName) {
      localStorage?.setItem('rZTrl3iOfg', Math.random().toString(36).substr(2, 9));
    }
    if (!localName) {
      localStorage?.setItem('name', guestName);
    }
  }, []);

  return (
    <MainLayout>
      <ReactFullpage
        licenseKey='gplv3-license'
        scrollOverflow={true}
        paddingBottom={100}
        paddingTop={100}
        sensitivity={10}
        render={({ state, fullpageApi }) => {

          if (fullpageApi && !showDetailContent) {
            fullpageApi.setAllowScrolling(false);
          }

          const handleClickDetail = () => {
            setShowDetailContent(true);
            fullpageApi.moveSectionDown();
            fullpageApi.setAllowScrolling(true);
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
                />
              </div>
              <div className="section">
                <QuranSection />
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
                <WishesSection />
              </div>
              <div className="section">
                <SendWishesSection
                  goToPrevious={goToPrevious}
                  guestName={guestName}
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
