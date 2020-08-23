import React from 'react';
import Form from 'Components/Form';
import Helmet from 'react-helmet/lib/Helmet';

export const Main = () => {
  return (
    <div role="Main">
      <Helmet>
        <title>TEST</title>
        <meta property="og:title" content="Test"/>
        <meta name="twitter:title" content="Test"/>
        <meta name="og:image:alt" content="Test"/>
        <link rel="canonical" href="https://test.com" />
        <meta property="og:url" content="https://test.com" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:site_name" content="Test" />
        <meta property="og:type" content="page" />
        <meta name="description" content="Test" />
        <meta property="og:description" content="Test" />
      </Helmet>

      <Form />
    </div>
  );
};

export default Main;
