import { css, keyframes } from '@emotion/core';
import Background from '@assets/images/tulip/tulip13.jpg';

const animation = keyframes`
  0% { right: -300px; opacity: 0;}
  50% { right: 50px; opacity: 0.5;}
  100% {right: 0px; opacity: 1;};
`;

const animationLeft = keyframes`
  0% { left: -300px; opacity: 0;}
  50% { left: 50px; opacity: 0.5;}
  100% {left: 0px; opacity: 1;};
`;

export const styWithAnimation = (isActive) => css`
  position: relative;
  animation: ${isActive ? animation : animationLeft} 1s;
`;

export const styWrapperItem = css`

  margin-bottom: 20px;

  h4 {
    color: #3A3B3C;
    font-weight: bold;
    margin: 0 0 4px 0;
    font-size: 18px;
  }

  blockquote {
    margin-top: 16px !important;
  }

  .infoName {
    font-size: 12px;
    text-transform: capitalize;
    letter-spacing: 2px;
    display: block;
  }

  .hide {
    display: none;
  }

  .active {
    diplay: block;
  }

  .description {
    font-size: 16px !important;
    max-height: 150px;
    overflow: auto;
    margin-bottom: 0 !important;
  }

  @media screen and (max-width: 400px) {
    .description {
      font-size: 14px !important;
    }
  }
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;

  .button-nav {
    font-size: 14px;
    padding: 5px 20px;
    color: #fff;
    // pink
    background: #FC94AF; 
  }
`;


export const styWrapper = css`
  #fh5co-testimonial {
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    width: 100%;
    color: #3A3B3C !important;
  }

  .overlay {
    z-index: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.3);
  }  

  .sub-title {
    font-size: 16px !important;
  }
`