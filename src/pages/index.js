import React, { useState, Fragment, useEffect } from 'react';
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
import ReactFullpage from '@fullpage/react-fullpage';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import LocationSection from '@components/LocationSection';
import StorySection from '@components/StorySection';
import PhotoSection from '@components/PhotoSection/Loadable';
import WishesSection from '@components/WishesSection';
import ConfirmationSection from '@components/ConfirmationSection';
import FooterSection from '@components/FooterSection';
import CovidSection from '@components/Covid19';
import FloatingMusic from '@components/FloatingMusic/Loadable';
import QuranSection from '@components/QuranSection';
import SendWishesSection from '@components/SendWishesSection';

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const isInvitation = getQueryValue(location, 'type') === 'invitation';
  const firstName = guestName.replace(/ .*/, '');
  const isAnonymGuest = guestName === '' && !isInvitation;
  const codeLink = getQueryValue(location, 'code') || '';
  const finalTicketLink = `code=${codeLink}&name=${guestName}`;

  const [showDetailContent, setShowDetailContent] = useState(false);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };


  return (
    <MainLayout>
      <ReactFullpage
        licenseKey='gplv3-license'
        scrollOverflow={true}
        fitToSection={true}
        paddingBottom={100}
        paddingTop={100}
        continuousVertical={true}
        render={({ state, fullpageApi }) => {

          const handleClickDetail = () => {
            fullpageApi.moveSectionDown();
          };

          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section">
                  <WelcomeSection
                    guestName={guestName}
                    isAnonymGuest={isAnonymGuest}
                    isInvitation={isInvitation}
                    location={location}
                    codeLink={finalTicketLink}
                    onClickDetail={handleClickDetail}
                  />
                </div>
                <div className="section">
                  <QuranSection />
                </div>
                <div className="section">
                  <HelloSection isInvitation={isInvitation} />
                </div>
                <div className="section">
                  <WeddingSection isInvitation={isInvitation} />
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
                <div className="section">
                  <FooterSection isInvitation={true} />
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
      <FloatingMusic />
    </MainLayout>
  )

  return (
    <MainLayout>
      <ReactFullpage
        licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.wrapper>
              <div className="section">
                <WelcomeSection
                  guestName={guestName}
                  isAnonymGuest={isAnonymGuest}
                  isInvitation={isInvitation}
                  location={location}
                  codeLink={finalTicketLink}
                  onClickDetail={handleClickDetail}
                />
              </div>
              <div className="section">
                <HelloSection isInvitation={isInvitation} />
              </div>
              <WeddingSection isInvitation={isInvitation} />
              {<CovidSection />}
              {<LocationSection />}
              <StorySection />
              <PhotoSection />
              <WishesSection />
              <ConfirmationSection guestName={firstName} isInvitation={true} codeLink={finalTicketLink} />
              <FooterSection isInvitation={true} />
            </ReactFullpage.wrapper>
          );
        }}
      />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
