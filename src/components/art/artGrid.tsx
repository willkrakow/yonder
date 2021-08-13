/** @jsx jsx */

import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import { jsx, Grid, Themed } from 'theme-ui';
import { ImageAsset, Artist } from '../../typings'

interface ArtGridProps {
  artArr: Array<ImageAsset>;
  artist: Artist;
}


const ArtGrid = ({ artArr, artist }: ArtGridProps) => {
  return (
    <React.Fragment>
      <Grid gap={4} columns={[1, 2, 2]} sx={{ mb: 5, mt: 4 }}>
        {artArr.map((a, index) => (
          <div key={index}>
            <GatsbyImage
              image={a.asset.gatsbyImageData}
              alt={a.caption || artist.name}
            />
            <Themed.p>
              <em>{a.caption || artist.name}</em>
            </Themed.p>
          </div>
        ))}
      </Grid>
    </React.Fragment>
  );
};


export default ArtGrid