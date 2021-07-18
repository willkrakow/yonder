/** @jsx jsx */

import React from 'react'
import { jsx, Grid } from 'theme-ui';
import { ImageAsset, Artist } from '../../typings'
import PictureCard from '../pictureCard';

interface ArtGridProps {
  artArr: Array<ImageAsset>;
  artist: Artist;
}


const ArtGrid = ({ artArr, artist }: ArtGridProps) => {
  return (
      <React.Fragment>
    <Grid columns={[1, 2, 2]} sx={{ mb: 5 }} >
      {artArr.map((a, index) => (
        <PictureCard key={index} title={a.caption || artist.name} image={a} link={artist.website || artist.image.asset.gatsbyImageData.images.fallback?.src || "#"}  />
      ))}
    </Grid>
    </React.Fragment>
  );
};


export default ArtGrid