/** @jsx jsx */
import React from "react";
import { jsx, Themed } from "theme-ui";
import { Artist } from "../../typings";
//@ts-ignore
import { Facebook, Email, Website } from "../icons";

const ArtistBio = (artist: Artist) => {
  return (
    <>
      <Themed.h4>About {artist.name.split(" ")[0]}</Themed.h4>
      <Themed.p>{artist.bio}</Themed.p>
      <Themed.h4 color="muted" >Contact</Themed.h4>
      {artist.website && <Website link={artist.website} />}
      {artist.email && <Email link={`mailto:${artist.email}`} />}
      {artist.facebook && <Facebook link={artist.facebook} />}
      {artist.instagram && <a href={artist.instagram}>Instagram</a>}
      {artist.twitter && <a href={artist.twitter}>Twitter</a>}
    </>
  );
};

export default ArtistBio;
