import { css } from '@emotion/core';
import Background from '@assets/images/bg/bg-3.jpg';

export const styWrapper = () => css`
.overlay {
  z-index: 0;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.5);
}  

#fh5co-couple-story {
  background-image: url(${Background});
  background-size: cover;
  background-position: right;
  min-height: 100vh;
}

`;
