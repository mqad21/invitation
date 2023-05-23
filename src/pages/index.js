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

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const hideGift = decodeURIComponent(getQueryValue(location, 'g') || '') === '0';
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  const firstName = guestName.replace(/ .*/, '');
  const isAnonymGuest = guestName === '' && !isInvitation;
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;

  const [showDetailContent, setShowDetailContent] = useState(false);


  return (
    <MainLayout>
      <ReactFullpage
        licenseKey='gplv3-license'
        scrollOverflow={true}
        fitToSection={true}
        paddingBottom={100}
        paddingTop={100}
        continuousVertical={true}
        normalScrollElements=".normal-scroll"
        render={({ state, fullpageApi }) => {

          if (fullpageApi && !showDetailContent) {
            fullpageApi.setAllowScrolling(false);
          }

          const handleClickDetail = () => {
            setShowDetailContent(true);
            fullpageApi.moveSectionDown();
            fullpageApi.setAllowScrolling(true);
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
                  guestName={guestName}
                />
              </div>
              {
                !hideGift &&
                <div className="section">
                  <GiftSection />
                </div>
              }
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
