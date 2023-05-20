import { css } from '@emotion/core';
import Background from '@assets/images/tulip/tulip12.jpg';

export const styWrapper = css`
  .sub-title {
    color: #3;
    font-weight: 600;
    letter-spacing: 3.5px;
    line-height: 15px;
    font-size: 1.5rem !important;
  }

  .overlay {
    z-index: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.4);
  }  

  #lq-couple {
    background-image: url(${Background});
    background-size: cover;
    background-position: 0 -280px ;
    min-height: 100vh;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  @media screen and (max-width: 768px) {
    #lq-couple {
      background-position: top !important ;
    }  
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 16px;
      margin: 0 0 8px 0;
    }
    #lq-couple {
      background-position: top !important ;
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
