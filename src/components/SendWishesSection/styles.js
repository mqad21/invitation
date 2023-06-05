import { css, keyframes } from '@emotion/core';
import Background from '@assets/images/tulip/tulip19.jpg';

export const styWrapper = css`
  .overlay {
    z-index: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.5 );
  }  

  #fh5co-testimonial {
      background-image: url(${Background});
      background-size: cover;
      background-position: top;
  }

  .sub-title {
    font-size: 16px !important;
  }

  @media (max-width: 768px) {
    #fh5co-testimonial {
      background-position: center;
      padding-bottom: 100px;
    }
  }

`;
