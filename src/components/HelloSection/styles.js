import { css } from '@emotion/core';
import Background from '@assets/images/white-bg-1.jpg';

export const styWrapper = css`
  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
    font-size: 2rem !important;
  }

  .overlay {
    z-index: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.8);
  }  

  #lq-couple {
    background: url(${Background}) no-repeat center center;
    background-size: cover;
    min-height: 100vh;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 16px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }
`;
