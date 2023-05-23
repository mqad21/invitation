import { css } from '@emotion/core';
import Background from '@assets/images/tulip/tulip14.jpg';

export const styWrapper = css`

  .overlay {
    z-index: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.6) !important;
  }  

  #fh5co-event {
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    width: 100%;
    color: #3A3B3C !important;  
  }

  .bismillah {
    color: #3A3B3C !important;
    font-size: 16px !important;
    font-family: arabic !important;
    margin-bottom: 24px !important;
    font-weight: 400 !important;
    letter-spacing: 0.5px !important;
  }

  .sub-title {
    color: #3A3B3C !important;
    font-size: 16px;
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 400 !important;

    @media screen and (max-width: 400px) {
      font-size: 15px !important;
    }
  }

  .text__live {
    text-align: center;
    margin-top: 24px;
  }

  .main-font {
    margin-top: 12px;

    @media screen and (max-width: 400px) {
      line-height: 1;
      margin-bottom: 8px;
    }
  }
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 2s ease infinite;
  margin-top: -8px;
  border: none;

  .img__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3A3B3C;
    font-weight: 500px;
    border-radius: 24px;
    background: #FC94AF;
    padding: 8px 16px;
  }

  i {
    margin-right: 4px;
  }

  img {
    max-width: 28px;
    margin-right: 8px;
    margin-bottom: 0;
  }
`;
