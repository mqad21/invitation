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
        //fullpage options
        licenseKey='gplv3-license'
        scrollingSpeed={1000} /* Options here */
        scrollOverflow={true}
        render={({ state, fullpageApi }) => {
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
                />
              </div>
              <div className="section">
                <HelloSection isInvitation={isInvitation} />
              </div>
              <div className="section">
                <WeddingSection isInvitation={isInvitation} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
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
              {/* <WeddingSection isInvitation={isInvitation} />
              {isInvitation && <CovidSection />}
              {isInvitation && <LocationSection />}
              <StorySection />
              <PhotoSection />
              <WishesSection />
              <ConfirmationSection guestName={firstName} isInvitation={isInvitation} codeLink={finalTicketLink} />
              <FooterSection isInvitation={isInvitation} />
              <FloatingMusic /> */}
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
