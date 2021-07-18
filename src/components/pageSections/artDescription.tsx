/** @jsx jsx */
import React from "react";
import { jsx, Themed } from "theme-ui";
import { Art } from "../../typings";

const ArtDescription = (art: Art) => {
  return (
    <>
    <Themed.h4>About this collection</Themed.h4>
      {art.description.map((c) => (
        <Themed.p key={c._key}>{c.children[0].text}</Themed.p>
      ))}
    </>
  );
};

export default ArtDescription
