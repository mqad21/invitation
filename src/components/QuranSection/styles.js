import { css } from '@emotion/core';
import Background from '@assets/images/bg/bg-5.jpg';

export const styWrapper = css`

  .overlay {
    z-index: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
  }  

  #lq-quran {
    background-image: url(${Background});
    background-size: cover;
    min-height: 100vh;
    color: #000 !important;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  .info {
    font-size: 14px;
    margin-top: 8px;
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: 16px;
    }

    .info {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }

    .info {
      font-size: 12px;
    }
  }
`;
