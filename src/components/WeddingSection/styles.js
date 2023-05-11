import { css } from '@emotion/core';
import Background from '@assets/images/bg-wedding-1.jpg';

export const styWrapper = css`

  #fh5co-event {
    background-image: url(${Background}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6));
    background-blend-mode: multiply;
    background-size: cover;
    background-position: center;
    width: 100%;
    color: #fff !important;  
  }

  .bismillah {
    color: #fff !important;
    font-size: 16px !important;
    font-family: arabic !important;
    margin-bottom: 24px !important;
    font-weight: 400 !important;
    letter-spacing: 0.5px !important;
  }

  .sub-title {
    color: #fff !important;
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
    color: #fff;
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
