import { node } from 'prop-types';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import '@assets/css/bootstrap.css';
import '@assets/css/icomoon.css';
import '@assets/css/style.css';
import Favicon from '@assets/images/LQ.png';

const IMAGE_URL = `lailaqadri.site/static/slide-6-4715e29302dbaa2ba21494c6258298d4.jpg`;
const META_DESCRIPTION = `Dengan memohon Rahmat dan Ridha Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan. - Dinda & Indra`;

function MainLayout({ children }) {

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);


  return (
    <Fragment>
      <Helmet>
        <title>Laila ❤️ Qadri</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="Walimatul Urs Laila & Qadri" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="lailaqadri.site" />
        <meta property="og:site_name" content="Walimatul Urs Laila & Qadri" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="Walimatul Urs Laila & Qadri" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="lailaqadri.site" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@mqad21" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
