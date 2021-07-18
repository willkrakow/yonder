import React from "react";
import { Helmet } from "react-helmet";


const StaticHead = () => {
    return (
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossOrigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    );
}

export default StaticHead