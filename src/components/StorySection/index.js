import React, { Fragment } from 'react';

import StoryItem from './StoryItem';
import { stories } from './stories-data';
import { styWrapper } from './styles';

function StorySection() {
  const renderStories = () => {
    return stories.map((s, index) => <StoryItem key={index} {...s} isInverted={index % 2 === 1} />);
  };

  return (
    <div css={styWrapper}>
      <div className="overlay"></div>
      <div id="fh5co-couple-story">
        <div className="container">
          <div className="row justify-center">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Perjalanan Kami</h2>
              <p className="sub-title">Kisah kasih sejak awal kami berjumpa</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0">
              <ul className="timeline animate-box">{renderStories()}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
