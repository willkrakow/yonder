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
      </Helmet>
    );
}

export default StaticHead